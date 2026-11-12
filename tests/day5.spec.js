// what we are learn in the day 5
//  Advanced locators :- CSS selectors , XPath and locator chaining
//  Dropdowns :- Native select and custom dropdowns
// Checkboxes :- Checke, uncheck and verify
// Radio buttons :- Select and validate options
// Form automation :- Complete form submission and validation
// Mini project  : Mini project a completer rigistration form


// What are advanced locators?
// CSS selectors :- selectors help us locate elements usign HTML tags, IDs, classes andd attributes.
/*
<input
    id="username"
    class="login-input"
    placeholder="Username"
/>

<button class="login-button">
</button>
*/

//  we can locate these elements in Playwright:

// username	 --> Element with ID username
// .login-input --> 	Element with class login-input
// input  --> 	All input elements
// button --> 	All button elements
// [placeholder="Username"] --> 	Element with matching placeholder
// button.login-button --> 	Button with login-button class


// XPath selectors :- XPath is another way to locate elements in HTML documents.

// Example Html : 
// <button> login </button>

// Playwright: 

// await page.locator('xpath=//button[text()="Login"]').click();
// or
// await page.locator('//button[text()="Login"]').click();



// Some common XPath expressions:

//input	Find all input elements
//button	Find all buttons
//button[@type="submit"]	Find submit buttons
//input[@id="username"]	Find input by ID
//button[text()="Login"]	Find button with exact text


// Locator chaining  :- Locator chaining allows us to locate elements relative to a parent element.

// <div class="product-card">
//     <h2>Sauce Labs Backpack</h2>
//     <button>Add to cart</button>
// </div>

// we can first locate the parent element and then chain the locator to find the child element

// const product = page.locator('.product-card');

// await product.getByRole('button', {
//     name: 'Add to cart'
// }).click();




// -------------------- Dropdown Automation ---------------------------

// two types of dropdowns:
// 1. native select
// 2. custom dropdowns


// 1. Native select dropdown
// <select id="country">
//     <option value="us">United States</option>
//     <option value="ca">Canada</option>
// </select>

// Playwright:
// await page.locator('#country').selectOption('us');

// selected by label 
// await page.locator('#country').selectOption({
//     label: 'India'
// });

// selected by index
// await page.locator('#country').selectOption({
//     index: 1
// });



// Checkboxes

// <input type="checkbox" id="terms">
//     <label for="terms">Accept Terms and Conditions</label>
// </input>

// methods : 

// check()  ---> select a checkbox 
// uncheck()  ---> deselect a checkbox
// isChecked()  ---> Get the current checkced state
// toBeChecked()  ---> Assert that checkbox is checked 
// not.toBeChecked()  ---> Assert that checkbox is not checked 

// Using check() 
// await page.locator('#terms').check();
// await expect(page.locator('#terms')).toBeChecked();

// Using uncheck()
// await page.locator('#terms').uncheck();
// await expect(page.locator('#terms')).not.toBeChecked();

// Using isChecked()
// const isChecked = await page.locator('#terms').isChecked();
// console.log('Checkbox checked:', isChecked);

// Using toBeChecked()
// await expect(page.locator('#terms')).toBeChecked();

// Using not.toBeChecked()
// await expect(page.locator('#terms')).not.toBeChecked();



// Handling multiple checkboxes

/* <input type="checkbox" id="html">
<input type="checkbox" id="css">
<input type="checkbox" id="javascript"> */

// Check multiple checkboxes
// await page.locator('#html').check();
// await page.locator('#css').check();
// await page.locator('#javascript').check();

// using shared selector
// const checkboxes = page.locator('input[type="checkbox"]');
// console.log(await checkboxes.count());


// Radio button Automation
// check()
// uncheck()
// isChecked()
// toBeChecked()

// Radio buttons allow users to select only one option from a group.

/* <label>
    <input type="radio" name="gender" value="male">
    Male
</label>

<label>
    <input type="radio" name="gender" value="female">
    Female
</label>

<label>
    <input type="radio" name="gender" value="other">
    Other
</label> */

// Selecting a radio button 

// await page.locator('input[value="male"]').check();
// await expect(page.locator('input[value="male"]')).toBeChecked();

// or use a user-facing locator 

// await page.getByLabel('Male').check();
// await expect(page.getByLabel('Male')).toBeChecked();




// Form Automation
// Form automation means using playwright to enter information, select options , validate fields and submit forms automatically.

// List of the methods:
// Text field--> fill()
// Email field	--> fill()
// Password field	--> fill()
// Dropdown	--> selectOption()
// Checkbox	--> check()
// Radio button	--> check()
// Submit button --> click()
// Verify field value --> toHaveValue()
// Verify checkbox/radio --> toBeChecked()
// Verify success message --> toBeVisible()
