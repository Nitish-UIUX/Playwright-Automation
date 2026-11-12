# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day2.spec.js >> verify login error using negative and positive assertions
- Location: tests\day2.spec.js:327:1

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
  228 | 
  229 |   // Check the first checkbox
  230 |   await firstCheckbox.check();
  231 |   await expect(firstCheckbox).toBeChecked();
  232 | 
  233 |   // Uncheck the second checkbox
  234 |   await secondCheckbox.uncheck();
  235 |   await expect(secondCheckbox).not.toBeChecked();
  236 | });
  237 | 
  238 | 
  239 | // 4. dropdown actions --- selectOption()
  240 | // dropdown is commonly usde din registration forms, filters , search forms, and settings pages.
  241 | 
  242 | 
  243 | test('practice dropdown selection', async ({ page }) => {
  244 |   await page.goto('https://the-internet.herokuapp.com/dropdown');
  245 | 
  246 |   // Locate the dropdown
  247 |   const dropdown = page.locator('#dropdown');
  248 | 
  249 |   // Verify dropdown is visible
  250 |   await expect(dropdown).toBeVisible();
  251 | 
  252 |   // Select Option 1 using its value
  253 |   await dropdown.selectOption('1');
  254 | 
  255 |   // Verify selected option
  256 |   await expect(dropdown).toHaveValue('1');
  257 | 
  258 |   // Select Option 2 using its label
  259 |   await dropdown.selectOption({
  260 |     label: 'Option 2'
  261 |   });
  262 | 
  263 |   // Verify selected option
  264 |   await expect(dropdown).toHaveValue('2');
  265 | });
  266 | 
  267 | 
  268 | 
  269 | // Assertion examples
  270 | // Assertions are used to verify the state of elements or values in the page.
  271 | // Common assertions include:-
  272 | // toBeVisible() ---> Element is visible
  273 | // toBeHidden()	---> Element is hidden
  274 | // toHaveText()	---> Element contains the expected text
  275 | // toContainText()	---> Element contains partial text
  276 | // toHaveValue()	---> Input contains expected value
  277 | // toHaveURL()	---> Page has the expected URL
  278 | // toHaveTitle()	---> Page has the expected title
  279 | // toBeEnabled()	---> Element is enabled
  280 | // toBeDisabled()	---> Element is disabled
  281 | // toBeChecked()	---> Checkbox is checked
  282 | 
  283 | 
  284 | test('practice Playwright assertions', async ({ page }) => {
  285 |   // Open website
  286 |   await page.goto('https://www.saucedemo.com/');
  287 | 
  288 |   // Assertion 1: Verify page title
  289 |   await expect(page).toHaveTitle('Swag Labs');
  290 | 
  291 |   // Enter login credentials
  292 |   await page.getByPlaceholder('Username').fill('standard_user');
  293 |   await page.getByPlaceholder('Password').fill('secret_sauce');
  294 | 
  295 |   // Assertion 2: Verify login button is enabled
  296 |   const loginButton = page.getByRole('button', {
  297 |     name: 'Login'
  298 |   });
  299 | 
  300 |   await expect(loginButton).toBeEnabled();
  301 | 
  302 |   // Click login
  303 |   await loginButton.click();
  304 | 
  305 |   // Assertion 3: Verify URL
  306 |   await expect(page).toHaveURL(/inventory.html/);
  307 | 
  308 |   // Assertion 4: Verify page heading
  309 |   await expect(
  310 |     page.getByText('Products', { exact: true })
  311 |   ).toBeVisible();
  312 |   // Assertion 5: Verify inventory items exist
  313 |   await expect(    page.locator('.inventory_item')
  314 |   ).toHaveCount(6);
  315 | });
  316 | 
  317 | 
  318 | 
  319 | // Additional assertion examples can be added below as needed.
  320 | // Nagative Assertions
  321 | // Playwright supports negative assertions using .not.
  322 | // await expect(errorMessage).not.toBeVisible();
  323 | // await expect(loginButton).not.toBeDisabled();
  324 | // await expect(checkbox).not.toBeChecked();
  325 | 
  326 | 
  327 | test('verify login error using negative and positive assertions', async ({ page }) => {
> 328 |   await page.goto('https://www.saucedemo.com/');
      |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  329 | 
  330 |   // Enter username
  331 |   await page.getByPlaceholder('Username').fill('standard_user');
  332 | 
  333 |   // Enter incorrect password
  334 |   await page.getByPlaceholder('Password').fill('wrong_password');
  335 | 
  336 |   // Click Login
  337 |   await page.getByRole('button', { name: 'Login' }).click();
  338 | 
  339 |   // Verify error message is visible
  340 |   const errorMessage = page.locator('[data-test="error"]');
  341 | 
  342 |   await expect(errorMessage).toBeVisible();
  343 | 
  344 |   // Verify successful navigation did NOT happen
  345 |   await expect(page).not.toHaveURL(/inventory.html/);
  346 | 
  347 |   // Verify error message contains expected text
  348 |   await expect(errorMessage).toContainText(
  349 |     'Username and password do not match'
  350 |   );
  351 | });
  352 | 
  353 | 
  354 | 
  355 | // Debugging Playwright tests
  356 | // Playwright provides several ways to debug tests:
  357 | // 1. Use page.pause() to pause the test and open the Playwright Inspector.
  358 | // 2. Use console.log() to print debug information.
  359 | // 3. Use test.only to run a specific test.
  360 | // 4. Use test.skip to skip a specific test.
  361 | // 5. Screenshot the page using page.screenshot() for visual debugging.
  362 | 
  363 | 
  364 | 
  365 | // Practice Playwright Inspector 
  366 | 
  367 | test('practice Playwright debugging', async ({ page }) => {
  368 |   await page.goto('https://www.saucedemo.com/');
  369 | 
  370 |   const usernameInput = page.getByPlaceholder('Username');
  371 | 
  372 |   await usernameInput.fill('standard_user');
  373 | 
  374 |   // Print the entered username
  375 |   console.log('Username:', await usernameInput.inputValue());
  376 | 
  377 |   // Pause execution and open Playwright Inspector
  378 |   await page.pause();
  379 | 
  380 |   await page.getByPlaceholder('Password').fill('secret_sauce');
  381 | 
  382 |   await page.getByRole('button', { name: 'Login' }).click();
  383 | 
  384 |   await expect(page).toHaveURL(/inventory.html/);
  385 | });
  386 | 
  387 | 
  388 | // Take a screenshot for debugging purposes
  389 | // Screenshot are usefull when:
  390 | // 1. A test fials unexpectedly.
  391 | // 2. You want tot capture a particular page.
  392 | // 3. You need evidence for a test report .
  393 | // 4. Your want to compare the ui befor and after an action.
  394 | 
  395 | 
  396 | 
  397 | test('practice taking screenshots', async ({ page }) => {
  398 |   await page.goto('https://www.saucedemo.com/');
  399 | 
  400 |   // Capture the login page
  401 |   await page.screenshot({
  402 |     path: 'screenshots/login-page.png',
  403 |     fullPage: true
  404 |   });
  405 | 
  406 |   // Enter login credentials
  407 |   await page.getByPlaceholder('Username').fill('standard_user');
  408 |   await page.getByPlaceholder('Password').fill('secret_sauce');
  409 | 
  410 |   await page.getByRole('button', { name: 'Login' }).click();
  411 | 
  412 |   // Verify successful login
  413 |   await expect(page).toHaveURL(/inventory.html/);
  414 | 
  415 |   // Capture the inventory page
  416 |   await page.screenshot({
  417 |     path: 'screenshots/inventory-page.png',
  418 |     fullPage: true
  419 |   });
  420 | });
  421 | 
  422 | 
  423 | // Trace Viewer 
  424 | // Playwright Trace Viewer allows you to record and inspect test execution.
  425 | // It helps in debugging by providing a detailed view of actions, network requests, and screenshots.
  426 | // To use Trace Viewer:
  427 | // 1. Enable tracing in your test using test.step or page.tracing.start().
  428 | // 2. Stop tracing using page.tracing.stop().
```