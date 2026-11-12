# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day4-reusable.spec.js >> Reusable Login Helper >> should login successfully
- Location: tests\day4-reusable.spec.js:7:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

# Test source

```ts
  1  | export async function login(page) {
  2  | 
> 3  |     await page.goto('https://www.saucedemo.com/');
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  4  | 
  5  |     await page.getByPlaceholder('Username')
  6  |         .fill('standard_user');
  7  | 
  8  |     await page.getByPlaceholder('Password')
  9  |         .fill('secret_sauce');
  10 | 
  11 |     await page.getByRole('button', { name: 'Login' })
  12 |         .click();
  13 | 
  14 | }
```