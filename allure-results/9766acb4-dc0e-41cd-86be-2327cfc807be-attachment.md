# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day2.spec.js >> practice fill and pressSequentially
- Location: tests\day2.spec.js:194:1

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
  108 |   const usernameInput = page.getByLabel('Username');
  109 | 
  110 |   // Locate password using its label
  111 |   const passwordInput = page.getByLabel('Password');
  112 | 
  113 |   // Verify both fields are visible
  114 |   await expect(usernameInput).toBeVisible();
  115 |   await expect(passwordInput).toBeVisible();
  116 | });
  117 | 
  118 | 
  119 | 
  120 | // Practice getByTestId() 
  121 | // getByTestId() is used to locate elements using the data-testid attribute
  122 | 
  123 | 
  124 | test('practice getByTestId locator', async ({ page }) => {
  125 | 
  126 |   // Create a sample HTML page
  127 |   // what is the setContent method?
  128 |   // setContent sets the HTML content of the page directly, useful for testing static HTML without navigating to a URL.
  129 |   await page.setContent(`
  130 |     <h1>Login Page</h1>
  131 | 
  132 |     <input data-testid="username-input" placeholder="Username">
  133 | 
  134 |     <input data-testid="password-input" placeholder="Password">
  135 | 
  136 |     <button data-testid="login-button">Login</button>
  137 |   `);
  138 | 
  139 |   // Locate elements using test IDs
  140 |   const username = page.getByTestId('username-input');
  141 |   const password = page.getByTestId('password-input');
  142 |   const loginButton = page.getByTestId('login-button');
  143 | 
  144 |   // Verify elements are visible
  145 |   await expect(username).toBeVisible();
  146 |   await expect(password).toBeVisible();
  147 |   await expect(loginButton).toBeVisible();
  148 | });
  149 | 
  150 | 
  151 | // Browser Action 
  152 | // fill() — Enter text into an input.
  153 | // click() — Click a button or link.
  154 | // type() — Type text character by character.
  155 | // check() / uncheck() — Handle checkboxes.
  156 | // selectOption() — Select dropdown options.
  157 | 
  158 | 
  159 | // 1. practice fill() and click() actions
  160 | 
  161 | 
  162 | test('login using fill and click actions', async ({ page }) => {
  163 | 
  164 |   // 1. Open the website
  165 |   await page.goto('https://www.saucedemo.com/');
  166 | 
  167 |   // 2. Locate username and password fields
  168 |   const usernameInput = page.getByPlaceholder('Username');
  169 |   const passwordInput = page.getByPlaceholder('Password');
  170 | 
  171 |   // 3. Enter login credentials
  172 |   await usernameInput.fill('standard_user');
  173 |   await passwordInput.fill('secret_sauce');
  174 | 
  175 |   // 4. Locate and click the Login button
  176 |   const loginButton = page.getByRole('button', {
  177 |     name: 'Login'
  178 |   });
  179 | 
  180 |   await loginButton.click();
  181 | 
  182 |   // 5. Verify successful login
  183 |   await expect(page).toHaveURL(/inventory.html/);
  184 | 
  185 |   await expect(
  186 |     page.getByText('Products', { exact: true })
  187 |   ).toBeVisible();
  188 | 
  189 | });
  190 | 
  191 | 
  192 | // 2. practice fill and pressSequentially
  193 | 
  194 | test('practice fill and pressSequentially', async ({ page }) => {
> 195 |   await page.goto('https://www.saucedemo.com/');
      |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  196 | 
  197 |   const usernameInput = page.getByPlaceholder('Username');
  198 | 
  199 |   // Fill the username directly
  200 |   await usernameInput.fill('standard_user');
  201 | 
  202 |   await expect(usernameInput).toHaveValue('standard_user');
  203 | 
  204 |   // Clear the existing value
  205 |   await usernameInput.clear();
  206 | 
  207 |   // Type character by character
  208 |   await usernameInput.pressSequentially('standard_user');
  209 | 
  210 |   // Verify the final value
  211 |   await expect(usernameInput).toHaveValue('standard_user');
  212 | });
  213 | 
  214 | 
  215 | 
  216 | // 3. practice check and uncheck actions
  217 | 
  218 | test('practice checkbox actions', async ({ page }) => {
  219 |   await page.goto('https://the-internet.herokuapp.com/checkboxes');
  220 | 
  221 |   // Locate both checkboxes
  222 |   const firstCheckbox = page.locator('input[type="checkbox"]').nth(0);
  223 |   const secondCheckbox = page.locator('input[type="checkbox"]').nth(1);
  224 | 
  225 |   // Verify initial state
  226 |   await expect(firstCheckbox).not.toBeChecked();
  227 |   await expect(secondCheckbox).toBeChecked();
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
```