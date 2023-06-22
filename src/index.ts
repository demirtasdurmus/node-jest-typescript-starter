import { server } from './server';

server.listen(3000, () => {
    // eslint-disable-next-line no-console
    console.log('Server is listening on port 3000');
});

const port = process.env.PORT;

// eslint-disable-next-line no-console
console.log(port);
