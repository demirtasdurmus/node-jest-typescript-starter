import { server } from './server';

const port = process.env.PORT || 3000;

/**
 * This comment will be regarded as a new feature for the staging environment
 */

server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is listening on port ${port}`);
});
