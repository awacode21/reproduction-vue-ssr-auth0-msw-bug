import { createSSRApp } from 'vue';
import App from './App.vue';
import Home from './components/Home.vue';
import Hello from './components/Hello.vue';
import Error from './components/Error.vue';
import { createAuth0, Auth0Plugin } from '@auth0/auth0-vue';
import {
    createRouter as _createRouter,
    createMemoryHistory,
    createWebHistory,
} from 'vue-router';
import setupMockServer from './msw/setup';

export async function createApp() {
    await setupMockServer();
    
    const router = _createRouter({
        // use appropriate history implementation for server/client
        // import.meta.env.SSR is injected by Vite.
        history: import.meta.env.SSR
            ? createMemoryHistory()
            : createWebHistory(),
        routes: [
            {
                path: '/',
                component: Home
            },
            {
                // catch all other routes which are unknown and display error page
                path: '/:pathMatch(.*)*',
                component: Error,
            },
        ],
    });

    const app = createSSRApp(App);
    let auth0PluginInstance: Auth0Plugin | undefined = undefined;

    if (!import.meta.env.SSR) {
        auth0PluginInstance = createAuth0({
            domain: 'dev-z2siq523bngwl57q.eu.auth0.com',
            client_id: 'pP5aVAqxzloZGRPiglurxcv3zePTthYK',
            redirect_uri: window.location.origin,
            // cacheLocation: 'localstorage',
            useRefreshTokens: true,
        });

        app.use(auth0PluginInstance);
    }

    app.use(router);
    return { app, router };
}
