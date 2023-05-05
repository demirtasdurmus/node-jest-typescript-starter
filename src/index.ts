import { IncomingMessage, ServerResponse, createServer, Server } from 'http';

process.on('uncaughtException', (err: unknown) => {
    // eslint-disable-next-line no-console
    console.error('There was an uncaught error', err);
    process.exit(1);
});

const server: Server = createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.url === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.end('Hello World');
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('Server is listening on port 3000');
});

export { server };
