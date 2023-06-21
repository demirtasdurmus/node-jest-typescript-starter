// import { MongoMemoryServer } from 'mongodb-memory-server';
// import mongoose from 'mongoose';
// import { server } from '../src/server';

// let mongo: MongoMemoryServer;

beforeAll(async () => {
    // process.env.API_VERSION = 'v1';
    // mongo = await MongoMemoryServer.create();
    // const mongoUri = mongo.getUri();
    // await mongoose.connect(mongoUri, {});
});

beforeEach(async () => {
    // console.clear();
    // const collections = await mongoose.connection.db.collections();
    // for (const collection of collections) {
    //     await collection.deleteMany({});
    // }
});

// afterEach(async () => {
//     server.close();
// });

afterAll(async () => {
    // if (mongo) {
    //     await mongo.stop();
    // }
    // await mongoose.connection.close();
});
