import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    // verbose: true,
    // automock: false,
    setupFilesAfterEnv: ['./jest.setup.ts'],
    // testMatch: ['**/tests/**/*.test.ts'], // match pattern for test files
    moduleFileExtensions: ['js', 'json', 'ts'],
    rootDir: '.',
    testRegex: '.e2e.test.ts$',
    // moduleNameMapper: {
    //     '^src/(.*)$': '<rootDir>/src/$1',
    //     '^tests/(.*)$': '<rootDir>/tests/$1',
    // },
};
export default config;
