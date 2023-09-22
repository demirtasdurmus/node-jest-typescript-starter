# Node.js-Jest TypeScript Starter Project

Welcome to your Node.js TypeScript starter project! This repository is set up with essential tools and configurations to help you kickstart your Node.js application development with TypeScript.

## Features

- **TypeScript:** Write your code in TypeScript, enabling static typing and improved developer experience.
- **ESLint:** Lint your code for consistent code style and catch potential issues early.
- **Prettier:** Keep your codebase consistently formatted using Prettier.
- **Husky & Lint-Staged:** Enforce code quality by running linting and formatting checks before each commit.
- **CommitLint:** Enforce conventional commit messages to maintain a clean commit history.
- **GitHub Actions:** Automate build and lint checks with GitHub Actions workflows.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download](https://nodejs.org/)
- npm: Included with Node.js installation
- TypeScript: Installed as a dev dependency

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/node-jest-typescript-starter.git
   cd node-jest-typescript-starter

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
    npm run dev
    ```

## Scripts

- `npm run commit`: Use the interactive Commitlint commit tool with conventional commit messages.
- `npm run clean`: Clean the `dist` directory.
- `npm run build`: Clean the `dist` directory and transpile TypeScript code..
- `npm start`: Run the transpiled code from the `dist` directory.
- `npm run dev`: Start the development server with hot-reloading using nodemon.
- `npm run format`: Format your code using Prettier.
- `npm run lint`: Lint your code using ESLint.
- `npm run test`: Run your tests using Jest.
- `npm run test:watch`: Run your tests using Jest in watch mode.
- `npm run test:cov`: Run your tests using Jest and generate a coverage report.
- `npm run danger:ci`: Run Danger in CI mode to check for potential issues with your code.

## Continuous Integration

This project includes GitHub Actions workflows to automatically build and test your code on each push. You can find the workflow configuration in the .github/workflows directory.

## License

This project is licensed under the ISC License. See the LICENSE file for details.

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
![pipeline](https://github.com/demirtasdurmus/node-jest-typescript-starter/actions/workflows/pipeline.yaml/badge.svg)
