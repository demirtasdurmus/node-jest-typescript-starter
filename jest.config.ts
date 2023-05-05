import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    automock: false,
    setupFilesAfterEnv: ['./jest.setup.ts'],
    // testMatch: ['**/tests/**/*.test.ts'], // match pattern for test files
};
export default config;
