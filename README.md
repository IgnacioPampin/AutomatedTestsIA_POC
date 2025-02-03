
# AutomatedTestsIA_POC
POC project to create an AI-driven automated tests creation/updates

## Prerequisites

1. **Ensure TypeScript is installed**:
    If you haven't installed TypeScript yet, you can do so by running:
    ```bash
    npm install -g typescript
    ```

2. **Install necessary dependencies**:
    Make sure you have the required dependencies installed in your project:
    ```bash
    npm install
    ```

## How to Initialize the Watcher

1. **Run the script**:
    You can run the `generate-tests.ts` script using `ts-node`:
    ```bash
    npx ts-node /Users/nacho/Documents/AutomatedTestsIA_POC/ai-test-poc/scripts/generate-tests.ts
    ```

    This command will start the watcher, and it will monitor the `../src` directory for any changes. When a file is added, changed, or removed, the corresponding event handler will be triggered, and the `generateTests` function will be called for `add` and `change` events.

## How Auto-Generated Tests Get Created

The `generate-tests.ts` script uses `chokidar` to watch for changes in the `src` directory. When a file is added or changed, the script generates corresponding test files in the `src/tests/ai-generated` directory.

### Example

For example, if you have a file `src/example.ts` with the following content:
typescript
export function add(a: number, b: number): number {
    return a + b;
}

### How to Run the Tests
Run Mocha tests: You can run the Mocha tests using the following command:
```npm test```

This command will execute all the test files in the src/tests/ai-generated directory.

### Run Cypress tests: If you have Cypress tests, you can open the Cypress Test Runner with the following command:
```npx cypress open```

Alternatively, you can run the Cypress tests in headless mode with the following command:
```npx cypress run```

### Directory Structure
Ensure your directory structure looks like this:
ai-test-poc/
├── src/
│   ├── example.ts
│   ├── navigation.ts
│   └── tests/
│       ├── ai-generated/
│       │   ├── hello-world.spec.ts
│       │   └── navigation.spec.ts
│       └── cypress/
│           └── integration/
│               └── sample_test.spec.ts
├── scripts/
│   └── generate-tests.ts
├── .mocharc.json
├── package.json
└── tsconfig.json

This setup ensures that your project is correctly configured for both Mocha and Cypress tests.

