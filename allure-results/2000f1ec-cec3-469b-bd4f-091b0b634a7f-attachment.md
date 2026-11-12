# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day2.spec.js >> practice dropdown selection
- Location: tests\day2.spec.js:243:1

# Error details

```
Error: page.goto: NS_ERROR_UNKNOWN_HOST
Call log:
  - navigating to "https://the-internet.herokuapp.com/dropdown", waiting until "load"

```

# Page snapshot

```yaml
- article [ref=e3]:
  - generic [ref=e6]:
    - heading "Server Not Found" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - text: Nightly can’t connect to the server at
      - strong [ref=e9]: the-internet.herokuapp.com
      - text: .
    - generic [ref=e10]:
      - heading "What can you do about it?" [level=3] [ref=e11]
      - list [ref=e12]:
        - listitem [ref=e13]: Check to make sure you’ve typed the website address correctly and try again in a few moments.
        - listitem [ref=e14]: Check your network connection.
        - listitem [ref=e15]: Check that Nightly has permission to access the web (you might be connected but behind a firewall).
    - paragraph [ref=e16]:
      - link "Learn more…" [ref=e17] [cursor=pointer]:
        - /url: https://support.mozilla.org/1/firefox/157.0/WINNT/en-US/server-not-found-connection-problem
    - button "Try Again" [ref=e20]
```

# Test source

```ts
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
  195 |   await page.goto('https://www.saucedemo.com/');
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
> 244 |   await page.goto('https://the-internet.herokuapp.com/dropdown');
      |              ^ Error: page.goto: NS_ERROR_UNKNOWN_HOST
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
  328 |   await page.goto('https://www.saucedemo.com/');
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
```