
const { test, expect } = require('@playwright/test');

test('identify webpage elements using locators', async ({ page }) => {

  // Open Playwright website
  await page.goto('https://playwright.dev/');

  // 1. Locate the Get started link using its role
  const getStartedLink = page.getByRole('link', {
    name: 'Get started'
  });

  await expect(getStartedLink).toBeVisible();

  // 2. Locate the same text using getByText
  const getStartedText = page.getByText('Get started', {
    exact: true
  });

  await expect(getStartedText).toBeVisible();

  // 3. Locate the main heading using its role
  const mainHeading = page.getByRole('heading', {
    level: 1
  });

  await expect(mainHeading).toBeVisible();

  // 4. Verify the heading contains expected text
  await expect(mainHeading).toContainText('Playwright');
});

// locator test example
test('locator test example', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Locate the Get started link using its role
  const getStartedLink = page.getByRole('link', {
    name: 'Get started'
  });

  await expect(getStartedLink).toBeVisible();
});

// need to target the "https://freecomers.com/" website
test('locator test for Freecomers', async ({ page }) => {
  await page.goto('https://freecomers.com/');

  // 1. Join Freecomers button
  const joinFreecomersButton = page.getByRole('button', {
    name: 'Join Freecomers'
  }).first();

  await expect(joinFreecomersButton).toBeVisible();

  // 2. Home button
  const homeButton = page.getByRole('button', {
    name: 'Home'
  });

  await expect(homeButton).toBeVisible();

  // 3. Sign In button
  const signInButton = page.getByRole('button', {
    name: 'Sign In'
  });

  await expect(signInButton).toBeVisible();
});


//  getByText() 

test('verify Freecomers homepage heading using text locator', async ({ page }) => {
  await page.goto('https://freecomers.com/');

  const headings = await page.locator('h1').allTextContents();

  console.log('H1 headings:', headings);
});



// practice getByPlaceholder() 
// A placeholder is the hint displayed inside an input filed befor hthe user enters anything.


test('practice getByPlaceholder locator', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const usernameInput = page.getByPlaceholder('Username');
  const passwordInput = page.getByPlaceholder('Password');

  await expect(usernameInput).toBeVisible();
  await expect(passwordInput).toBeVisible();
});


// Practice getByLabel() 
// getByLabel() is used to locate form fields through their associated labels.


test('locate input fields using labels', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/two_factor');

  // Locate username using its label
  const usernameInput = page.getByLabel('Username');

  // Locate password using its label
  const passwordInput = page.getByLabel('Password');

  // Verify both fields are visible
  await expect(usernameInput).toBeVisible();
  await expect(passwordInput).toBeVisible();
});



// Practice getByTestId() 
// getByTestId() is used to locate elements using the data-testid attribute


test('practice getByTestId locator', async ({ page }) => {

  // Create a sample HTML page
  // what is the setContent method?
  // setContent sets the HTML content of the page directly, useful for testing static HTML without navigating to a URL.
  await page.setContent(`
    <h1>Login Page</h1>

    <input data-testid="username-input" placeholder="Username">

    <input data-testid="password-input" placeholder="Password">

    <button data-testid="login-button">Login</button>
  `);

  // Locate elements using test IDs
  const username = page.getByTestId('username-input');
  const password = page.getByTestId('password-input');
  const loginButton = page.getByTestId('login-button');

  // Verify elements are visible
  await expect(username).toBeVisible();
  await expect(password).toBeVisible();
  await expect(loginButton).toBeVisible();
});


// Browser Action 
// fill() — Enter text into an input.
// click() — Click a button or link.
// type() — Type text character by character.
// check() / uncheck() — Handle checkboxes.
// selectOption() — Select dropdown options.


// 1. practice fill() and click() actions


test('login using fill and click actions', async ({ page }) => {

  // 1. Open the website
  await page.goto('https://www.saucedemo.com/');

  // 2. Locate username and password fields
  const usernameInput = page.getByPlaceholder('Username');
  const passwordInput = page.getByPlaceholder('Password');

  // 3. Enter login credentials
  await usernameInput.fill('standard_user');
  await passwordInput.fill('secret_sauce');

  // 4. Locate and click the Login button
  const loginButton = page.getByRole('button', {
    name: 'Login'
  });

  await loginButton.click();

  // 5. Verify successful login
  await expect(page).toHaveURL(/inventory.html/);

  await expect(
    page.getByText('Products', { exact: true })
  ).toBeVisible();

});


// 2. practice fill and pressSequentially

test('practice fill and pressSequentially', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const usernameInput = page.getByPlaceholder('Username');

  // Fill the username directly
  await usernameInput.fill('standard_user');

  await expect(usernameInput).toHaveValue('standard_user');

  // Clear the existing value
  await usernameInput.clear();

  // Type character by character
  await usernameInput.pressSequentially('standard_user');

  // Verify the final value
  await expect(usernameInput).toHaveValue('standard_user');
});



// 3. practice check and uncheck actions

test('practice checkbox actions', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  // Locate both checkboxes
  const firstCheckbox = page.locator('input[type="checkbox"]').nth(0);
  const secondCheckbox = page.locator('input[type="checkbox"]').nth(1);

  // Verify initial state
  await expect(firstCheckbox).not.toBeChecked();
  await expect(secondCheckbox).toBeChecked();

  // Check the first checkbox
  await firstCheckbox.check();
  await expect(firstCheckbox).toBeChecked();

  // Uncheck the second checkbox
  await secondCheckbox.uncheck();
  await expect(secondCheckbox).not.toBeChecked();
});


// 4. dropdown actions --- selectOption()
// dropdown is commonly usde din registration forms, filters , search forms, and settings pages.


test('practice dropdown selection', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');

  // Locate the dropdown
  const dropdown = page.locator('#dropdown');

  // Verify dropdown is visible
  await expect(dropdown).toBeVisible();

  // Select Option 1 using its value
  await dropdown.selectOption('1');

  // Verify selected option
  await expect(dropdown).toHaveValue('1');

  // Select Option 2 using its label
  await dropdown.selectOption({
    label: 'Option 2'
  });

  // Verify selected option
  await expect(dropdown).toHaveValue('2');
});



// Assertion examples
// Assertions are used to verify the state of elements or values in the page.
// Common assertions include:-
// toBeVisible() ---> Element is visible
// toBeHidden()	---> Element is hidden
// toHaveText()	---> Element contains the expected text
// toContainText()	---> Element contains partial text
// toHaveValue()	---> Input contains expected value
// toHaveURL()	---> Page has the expected URL
// toHaveTitle()	---> Page has the expected title
// toBeEnabled()	---> Element is enabled
// toBeDisabled()	---> Element is disabled
// toBeChecked()	---> Checkbox is checked


test('practice Playwright assertions', async ({ page }) => {
  // Open website
  await page.goto('https://www.saucedemo.com/');

  // Assertion 1: Verify page title
  await expect(page).toHaveTitle('Swag Labs');

  // Enter login credentials
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');

  // Assertion 2: Verify login button is enabled
  const loginButton = page.getByRole('button', {
    name: 'Login'
  });

  await expect(loginButton).toBeEnabled();

  // Click login
  await loginButton.click();

  // Assertion 3: Verify URL
  await expect(page).toHaveURL(/inventory.html/);

  // Assertion 4: Verify page heading
  await expect(
    page.getByText('Products', { exact: true })
  ).toBeVisible();
  // Assertion 5: Verify inventory items exist
  await expect(    page.locator('.inventory_item')
  ).toHaveCount(6);
});



// Additional assertion examples can be added below as needed.
// Nagative Assertions
// Playwright supports negative assertions using .not.
// await expect(errorMessage).not.toBeVisible();
// await expect(loginButton).not.toBeDisabled();
// await expect(checkbox).not.toBeChecked();


test('verify login error using negative and positive assertions', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Enter username
  await page.getByPlaceholder('Username').fill('standard_user');

  // Enter incorrect password
  await page.getByPlaceholder('Password').fill('wrong_password');

  // Click Login
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify error message is visible
  const errorMessage = page.locator('[data-test="error"]');

  await expect(errorMessage).toBeVisible();

  // Verify successful navigation did NOT happen
  await expect(page).not.toHaveURL(/inventory.html/);

  // Verify error message contains expected text
  await expect(errorMessage).toContainText(
    'Username and password do not match'
  );
});



// Debugging Playwright tests
// Playwright provides several ways to debug tests:
// 1. Use page.pause() to pause the test and open the Playwright Inspector.
// 2. Use console.log() to print debug information.
// 3. Use test.only to run a specific test.
// 4. Use test.skip to skip a specific test.
// 5. Screenshot the page using page.screenshot() for visual debugging.



// Practice Playwright Inspector 

test('practice Playwright debugging', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const usernameInput = page.getByPlaceholder('Username');

  await usernameInput.fill('standard_user');

  // Print the entered username
  console.log('Username:', await usernameInput.inputValue());

  // Pause execution and open Playwright Inspector
  await page.pause();

  await page.getByPlaceholder('Password').fill('secret_sauce');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/inventory.html/);
});


// Take a screenshot for debugging purposes
// Screenshot are usefull when:
// 1. A test fials unexpectedly.
// 2. You want tot capture a particular page.
// 3. You need evidence for a test report .
// 4. Your want to compare the ui befor and after an action.



test('practice taking screenshots', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Capture the login page
  await page.screenshot({
    path: 'screenshots/login-page.png',
    fullPage: true
  });

  // Enter login credentials
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');

  await page.getByRole('button', { name: 'Login' }).click();

  // Verify successful login
  await expect(page).toHaveURL(/inventory.html/);

  // Capture the inventory page
  await page.screenshot({
    path: 'screenshots/inventory-page.png',
    fullPage: true
  });
});


// Trace Viewer 
// Playwright Trace Viewer allows you to record and inspect test execution.
// It helps in debugging by providing a detailed view of actions, network requests, and screenshots.
// To use Trace Viewer:
// 1. Enable tracing in your test using test.step or page.tracing.start().
// 2. Stop tracing using page.tracing.stop().
// 3. Open the trace file using npx playwright show-trace <trace-file>.zip
// Example:
// await page.tracing.start({ screenshots: true, snapshots: true });
// // Perform test actions
// await page.tracing.stop({ path: 'trace.zip' });

