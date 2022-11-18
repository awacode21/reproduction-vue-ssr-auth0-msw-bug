import fs from "fs";
import express, { response } from "express";
import serialize from "serialize-javascript";
import compression from "compression";
import serveStatic from "serve-static";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { createRequire } from "module";
import authMiddleware from "./auth-middleware.mjs";

const isomorphicRequire = createRequire(import.meta.url);

const { auth, requiresAuth } = isomorphicRequire("express-openid-connect");

async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === "production"
) {
  const brand = process.env.VITE_APP_BRAND;

  const indexProd = isProd
    ? fs.readFileSync(
        fileURLToPath(new URL("dist/client/index.html", import.meta.url)),
        "utf-8"
      )
    : "";

  const manifest = isProd
    ? isomorphicRequire("./dist/client/ssr-manifest.json")
    : {};

  const app = express();
  let vite;
  if (!isProd) {
    vite = await createViteServer({
      root,
      logLevel: "info",
      mode: brand,

      server: {
        middlewareMode: true,
        watch: {
          // During tests we edit the files too fast and sometimes chokidar
          // misses change events, so enforce polling for consistency
          usePolling: true,
          interval: 100,
        },
      },
      appType: "custom",
    });
    // use vite's connect instance as middleware
    app.use(vite.middlewares);
  } else {
    app.use(compression());
    app.use(
      serveStatic(fileURLToPath(new URL("dist/client", import.meta.url)), {
        index: false,
      })
    );
  }

  // add auth0 middleware
  app.use(auth(authMiddleware.authConfig));
  app.use(authMiddleware.authRouter);

  app.use("*", async (req, res) => {
    try {
      const url = req.originalUrl;
      let template, render;

      if (!isProd) {
        // always read fresh template in dev
        template = fs.readFileSync(
          fileURLToPath(new URL("index.html", import.meta.url)),
          "utf-8"
        );
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule("/src/entry-server.ts")).render;
      } else {
        template = indexProd;
        const entryServer = await import("./dist/server/entry-server.js");
        render = entryServer.render;
      }

      const [appHtml, preloadLinks] = await render(url, manifest);

      const html = template
        .replace(`<!--ssr-preload-links-->`, preloadLinks)
        .replace(`<!--ssr-app-html-->`, appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    } catch (e) {
      vite && vite.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });

  return { app, vite };
}

let port = process.env.PORT || 3000;

createServer().then(({ app }) => {
  app.listen(port, () => {
    console.log("listen on port ", port);
  });
});
