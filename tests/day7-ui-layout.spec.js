import { test, expect } from '@playwright/test';
import path from 'path';
import { pathToFileURL } from 'url';

const demoPath = path.resolve('demo/layout-demo.html');
const demoUrl = pathToFileURL(demoPath).href;

function areOverlapping(a, b) {

    return (
        a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
    );

}

test.describe('Day 7 - UI Layout Testing', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(demoUrl);
    });

    test('Test 1 - Verify element position and dimensions', async ({ page }) => {

        const button = page.getByTestId('position-button');

        const box = await button.boundingBox();

        expect(box).not.toBeNull();

        console.log('Position:', box);

        expect(box.x).toBeGreaterThan(0);
        expect(box.y).toBeGreaterThan(0);

        expect(box.width).toBe(180);
        expect(box.height).toBe(45);

    });

    test('Test 2 - Verify input field alignment', async ({ page }) => {

        const username = await page.getByTestId('username').boundingBox();

        const password = await page.getByTestId('password').boundingBox();

        expect(username).not.toBeNull();
        expect(password).not.toBeNull();

        console.log('Username:', username);
        console.log('Password:', password);

        // Compare horizontal alignment
        expect(Math.abs(username.x - password.x)).toBeLessThanOrEqual(1);

        // Compare widths
        expect(Math.abs(username.width - password.width)).toBeLessThanOrEqual(1);

    });

    test('Test 3 - Verify elements are overlapping', async ({ page }) => {

        const boxOne = await page.getByTestId('box-one').boundingBox();

        const boxTwo = await page.getByTestId('box-two').boundingBox();

        expect(boxOne).not.toBeNull();
        expect(boxTwo).not.toBeNull();

        const overlap = areOverlapping(boxOne, boxTwo);

        console.log('Are elements overlapping?', overlap);

        expect(overlap).toBe(true);

    });


    test('Test 4 - Visual comparison of card', async ({ page }) => {

        const card = page.getByTestId('visual-card');

        await expect(card).toBeVisible();

        await expect(card).toHaveScreenshot('visual-card.png');

    });


    test('Test 5 - Verify responsive layout', async ({ page }) => {

    const grid = page.getByTestId('responsive-grid');

    // Desktop viewport
    await page.setViewportSize({
        width: 1200,
        height: 800
    });

    let columns = await grid.locator('.responsive-item').evaluateAll(elements => {
        return elements.map(element => {
            return element.getBoundingClientRect().left;
        });
    });

    console.log('Desktop positions:', columns);

    // Three columns should have three different X positions
    expect(new Set(columns).size).toBe(3);


    // Mobile viewport
    await page.setViewportSize({
        width: 390,
        height: 844
    });

    columns = await grid.locator('.responsive-item').evaluateAll(elements => {
        return elements.map(element => {
            return element.getBoundingClientRect().left;
        });
    });

    console.log('Mobile positions:', columns);

    // One column means all three items have the same X position
    expect(new Set(columns).size).toBe(1);

});

});