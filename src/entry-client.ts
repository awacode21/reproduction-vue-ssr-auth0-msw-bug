import { createApp } from './main';

async function init() {
    const { app, router } = await createApp();

    // wait until router is ready before mounting to ensure hydration match
    router.isReady().then(() => {
        app.mount('#app');
    });
}

init();
