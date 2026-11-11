
const { test, expect } = require('@playwright/test');
const { allure } = require('allure-playwright');
const fs = require('fs');

test.describe('Day 15 - Allure Reporting Framework', () => {

  test('01 - Login page validation', async ({ page }) => {
    const logs = [];

    await allure.epic('E-commerce Application');
    await allure.feature('Authentication');
    await allure.story('Login Page Validation');
    await allure.severity('critical');
    await allure.owner('QA Automation Team');

    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveTitle(/Swag Labs/);

    await expect(
      page.locator('[data-test="username"]')
    ).toBeVisible();

    logs.push('Login page opened successfully');
    logs.push('Username field is visible');

    const screenshot = await page.screenshot({
      fullPage: true,
    });

    await allure.attachment(
      'Login Page Screenshot',
      screenshot,
      'image/png'
    );

    await allure.attachment(
      'Execution Logs',
      logs.join('\n'),
      'text/plain'
    );
  });

  test('02 - Successful login', async ({ page }) => {
    await allure.epic('E-commerce Application');
    await allure.feature('Authentication');
    await allure.story('Successful Login');
    await allure.severity('critical');
    await allure.owner('QA Automation Team');

    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]')
      .fill('standard_user');

    await page.locator('[data-test="password"]')
      .fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    await expect(
      page.locator('.inventory_list')
    ).toBeVisible();

    await allure.attachment(
      'Login Success',
      'User logged in successfully',
      'text/plain'
    );
  });

  test('03 - Product inventory validation', async ({ page }) => {
    await allure.epic('E-commerce Application');
    await allure.feature('Products');
    await allure.story('Product Inventory');
    await allure.severity('normal');
    await allure.owner('QA Automation Team');

    await page.goto('https://www.saucedemo.com/');

    await page.locator('[data-test="username"]')
      .fill('standard_user');

    await page.locator('[data-test="password"]')
      .fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    await expect(
      page.locator('.inventory_item')
    ).toHaveCount(6);

    await allure.attachment(
      'Inventory Validation',
      'All six products are displayed',
      'text/plain'
    );
  });

  test.skip('04 - Checkout validation (future test)', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

});
