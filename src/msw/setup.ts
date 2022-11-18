const setupMockServer = async () => {
    if (import.meta.env.DEV) {
        const serverConfigurationObject = {
            onUnhandledRequest(request: { url: { href: string } }) {
                // avoid assets, fonts, images, or vite internal to be processed by mock server
                if (
                    /(\/assets+)|(\/fonts+)|(\/images)|(\/__vite_ping)|(\/auth\/+)/.test(
                        request.url.href
                    )
                ) {
                    return;
                }
            },
        };
        if (import.meta.env.SSR) {
            const { server } = await import('./server');
            server.listen(serverConfigurationObject);
        } else {
            const { worker } = await import('./browser');
            worker.start(serverConfigurationObject);
        }
    }
};

export default setupMockServer;
