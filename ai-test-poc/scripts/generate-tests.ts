import chokidar from 'chokidar';
import path from 'path';
import fs from 'fs';

// Initialize watcher.
const watcher = chokidar.watch(path.resolve(__dirname, '../src'), {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true
});

// Define what to do when a file is added, changed, or removed.
watcher
    .on('add', filePath => generateTests(filePath))
    .on('change', filePath => generateTests(filePath))
    .on('unlink', filePath => console.log(`File ${filePath} has been removed`));

function generateTests(filePath: string) {
    console.log(`File ${filePath} has been changed. Generating tests...`);
    const fileName = path.basename(filePath, path.extname(filePath));
    const testFilePath = path.resolve(__dirname, `../src/tests/ai-generated/${fileName}.spec.ts`);

    let testContent = '';

    if (fileName === 'example') {
        testContent = `
import { add } from '../example';

describe('add', () => {
    it('should add two numbers correctly', () => {
        expect(add(1, 2)).toBe(3);
    });
});
`;
    } else if (fileName === 'navigation') {
        testContent = `
/// <reference types="cypress" />

describe('Navigation Tests', () => {
    it('should navigate to Savage X and click on the shopping bag', () => {
        cy.visit('https://www.savagex.com/');
        cy.get('[data-qa-automation="homeShoppingBag"]').click();
    });
});
`;
    }

    fs.writeFileSync(testFilePath, testContent);
    console.log(`Test file generated at ${testFilePath}`);
}