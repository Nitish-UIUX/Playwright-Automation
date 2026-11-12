# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day2.spec.js >> identify webpage elements using locators
- Location: tests\day2.spec.js:4:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://playwright.dev/", waiting until "load"

```

# Test source

```ts
  1   | 
  2   | const { test, expect } = require('@playwright/test');
  3   | 
  4   | test('identify webpage elements using locators', async ({ page }) => {
  5   | 
  6   |   // Open Playwright website
> 7   |   await page.goto('https://playwright.dev/');
      |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  8   | 
  9   |   // 1. Locate the Get started link using its role
  10  |   const getStartedLink = page.getByRole('link', {
  11  |     name: 'Get started'
  12  |   });
  13  | 
  14  |   await expect(getStartedLink).toBeVisible();
  15  | 
  16  |   // 2. Locate the same text using getByText
  17  |   const getStartedText = page.getByText('Get started', {
  18  |     exact: true
  19  |   });
  20  | 
  21  |   await expect(getStartedText).toBeVisible();
  22  | 
  23  |   // 3. Locate the main heading using its role
  24  |   const mainHeading = page.getByRole('heading', {
  25  |     level: 1
  26  |   });
  27  | 
  28  |   await expect(mainHeading).toBeVisible();
  29  | 
  30  |   // 4. Verify the heading contains expected text
  31  |   await expect(mainHeading).toContainText('Playwright');
  32  | });
  33  | 
  34  | // locator test example
  35  | test('locator test example', async ({ page }) => {
  36  |   await page.goto('https://playwright.dev/');
  37  | 
  38  |   // Locate the Get started link using its role
  39  |   const getStartedLink = page.getByRole('link', {
  40  |     name: 'Get started'
  41  |   });
  42  | 
  43  |   await expect(getStartedLink).toBeVisible();
  44  | });
  45  | 
  46  | // need to target the "https://freecomers.com/" website
  47  | test('locator test for Freecomers', async ({ page }) => {
  48  |   await page.goto('https://freecomers.com/');
  49  | 
  50  |   // 1. Join Freecomers button
  51  |   const joinFreecomersButton = page.getByRole('button', {
  52  |     name: 'Join Freecomers'
  53  |   }).first();
  54  | 
  55  |   await expect(joinFreecomersButton).toBeVisible();
  56  | 
  57  |   // 2. Home button
  58  |   const homeButton = page.getByRole('button', {
  59  |     name: 'Home'
  60  |   });
  61  | 
  62  |   await expect(homeButton).toBeVisible();
  63  | 
  64  |   // 3. Sign In button
  65  |   const signInButton = page.getByRole('button', {
  66  |     name: 'Sign In'
  67  |   });
  68  | 
  69  |   await expect(signInButton).toBeVisible();
  70  | });
  71  | 
  72  | 
  73  | //  getByText() 
  74  | 
  75  | test('verify Freecomers homepage heading using text locator', async ({ page }) => {
  76  |   await page.goto('https://freecomers.com/');
  77  | 
  78  |   const headings = await page.locator('h1').allTextContents();
  79  | 
  80  |   console.log('H1 headings:', headings);
  81  | });
  82  | 
  83  | 
  84  | 
  85  | // practice getByPlaceholder() 
  86  | // A placeholder is the hint displayed inside an input filed befor hthe user enters anything.
  87  | 
  88  | 
  89  | test('practice getByPlaceholder locator', async ({ page }) => {
  90  |   await page.goto('https://www.saucedemo.com/');
  91  | 
  92  |   const usernameInput = page.getByPlaceholder('Username');
  93  |   const passwordInput = page.getByPlaceholder('Password');
  94  | 
  95  |   await expect(usernameInput).toBeVisible();
  96  |   await expect(passwordInput).toBeVisible();
  97  | });
  98  | 
  99  | 
  100 | // Practice getByLabel() 
  101 | // getByLabel() is used to locate form fields through their associated labels.
  102 | 
  103 | 
  104 | test('locate input fields using labels', async ({ page }) => {
  105 |   await page.goto('https://the-internet.herokuapp.com/two_factor');
  106 | 
  107 |   // Locate username using its label
```