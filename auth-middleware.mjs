import express from "express";

const authConfig = {
  authRequired: false,
  auth0Logout: true,
  secret: "3807fc79187043beddf4510a8e844f09124acc88fe4f4fdfeec7cdb9baf114ca",
  baseURL: "http://localhost:3000/",
  clientID: "HD1BXoLY5VB6KHtLAwPnlX8lUZ7iSGdH",
  issuerBaseURL: "https://dev-z2siq523bngwl57q.eu.auth0.com",
  routes: {
    login: false,
  },
  clientSecret:
    "_RodfjJ0LdXP2Q9jlmh2z67hZMK5vvUbOedK2QgcBB-Rx08NW7Nd9AyrzUj_f1Wg",
  authorizationParams: {
    response_type: "code",
    scope: "openid profile email offline_access read:products",
    prompt: "consent",
  },
};

const authRouter = express.Router();

authRouter.get("/auth/isAuthenticated", (req, res) => {
  res.send(req.oidc.isAuthenticated ? req.oidc.isAuthenticated() : false);
});
authRouter.get("/auth/user", (req, res) => {
  res.send(req.oidc.user ? req.oidc.user : null);
});
authRouter.get("/auth/token", async (req, res) => {
  if (req.oidc.accessToken) {
    console.log("if token");
    let { access_token, isExpired, refresh } = req.oidc.accessToken;
    if (isExpired()) {
      ({ access_token } = await refresh());
    }
    res.send(access_token);
  } else {
    res.send(null);
  }
});
authRouter.get("/auth/login", (req, res) => res.oidc.login({ returnTo: "/" }));
authRouter.get("/auth/logout", (req, res) =>
  res.oidc.logout({ returnTo: "/" })
);

export default { authConfig, authRouter };
