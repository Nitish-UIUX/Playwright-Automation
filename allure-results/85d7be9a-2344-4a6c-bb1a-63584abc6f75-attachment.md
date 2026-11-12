# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day5-form.spec.js >> Day 5 - Complete Form Automation >> Test 3 - Submit valid form
- Location: tests\day5-form.spec.js:69:9

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - paragraph [ref=e3]:
    - link "PMP Practice" [ref=e4] [cursor=pointer]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
  - banner [ref=e6]:
    - navigation "Main navigation" [ref=e7]:
      - link "SUT" [ref=e8] [cursor=pointer]:
        - /url: /
        - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman." [ref=e9]'
        - text: Practice
      - generic [ref=e10]:
        - list [ref=e11]:
          - listitem [ref=e12]:
            - button "Demos" [ref=e13] [cursor=pointer]
          - listitem [ref=e14]:
            - link "Tools" [ref=e15] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e16]:
            - link "Tips" [ref=e17] [cursor=pointer]:
              - /url: /tips
          - listitem [ref=e18]:
            - link "Test Cases" [ref=e19] [cursor=pointer]:
              - /url: /test-cases
          - listitem [ref=e20]:
            - link "API Testing" [ref=e21] [cursor=pointer]:
              - /url: /notes/api/api-docs/
          - listitem [ref=e22]:
            - link "About" [ref=e23] [cursor=pointer]:
              - /url: /about
        - list
        - link "Free ISTQB Mock Exams" [ref=e24] [cursor=pointer]:
          - /url: https://istqb.expandtesting.com/
  - main [ref=e25]:
    - generic [ref=e28]:
      - insertion
    - paragraph [ref=e30]:
      - text: Do you enjoy this platform? ❤️
      - link "Buy us a coffee" [ref=e31] [cursor=pointer]:
        - /url: https://www.buymeacoffee.com/expandtesting
    - generic [ref=e32]:
      - generic:
        - insertion
      - generic [ref=e35]:
        - navigation "breadcrumb mb-2" [ref=e36]:
          - list [ref=e37]:
            - listitem [ref=e38]:
              - link "Home" [ref=e39] [cursor=pointer]:
                - /url: /
            - listitem [ref=e40]: / Form Validation
        - heading "Form Validation page for Automation Testing Practice" [level=1] [ref=e41]
        - generic [ref=e45]:
          - generic [ref=e46]:
            - generic [ref=e47]: Contact Name
            - textbox "Contact Name" [ref=e48]: dodo
          - generic [ref=e49]:
            - generic [ref=e50]: Contact number
            - textbox "Contact number PickUp Date" [ref=e51]:
              - /placeholder: 012-3456789
          - generic [ref=e52]:
            - generic [ref=e53]: PickUp Date
            - textbox [ref=e54]
          - generic [ref=e55]:
            - generic [ref=e56]: Payment Method
            - combobox "Payment Method" [ref=e57]:
              - option "Choose..." [disabled] [selected]
              - option "cash on delivery"
              - option "card"
          - button "Register" [ref=e59] [cursor=pointer]
      - generic:
        - insertion
  - contentinfo [ref=e60]:
    - generic [ref=e65]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=e66]
      - paragraph [ref=e67]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=e68] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - generic [ref=e69] [cursor=pointer]
```

# Test source

```ts
  1   | 
  2   | import { test, expect } from '@playwright/test';
  3   | 
  4   | test.describe('Day 5 - Complete Form Automation', () => {
  5   | 
> 6   |     test.beforeEach(async ({ page }) => {
      |          ^ Test timeout of 30000ms exceeded while running "beforeEach" hook.
  7   | 
  8   |         await page.goto(
  9   |             'https://practice.expandtesting.com/form-validation',
  10  |             {
  11  |                 waitUntil: 'domcontentloaded',
  12  |                 timeout: 60000
  13  |             }
  14  |         );
  15  | 
  16  |         await expect(page.locator('form')).toBeVisible();
  17  | 
  18  |     });
  19  | 
  20  |     // Test 1 - Verify form fields
  21  |     test('Test 1 - Verify form fields', async ({ page }) => {
  22  | 
  23  |         await expect(page.locator('[name="ContactName"]')).toBeVisible();
  24  |         await expect(page.locator('[name="contactnumber"]')).toBeVisible();
  25  |         await expect(page.locator('[name="pickupdate"]')).toBeVisible();
  26  |         await expect(page.locator('[name="payment"]')).toBeVisible();
  27  | 
  28  |         await expect(
  29  |             page.getByRole('button', { name: 'Register' })
  30  |         ).toBeVisible();
  31  | 
  32  |     });
  33  | 
  34  |     // Test 2 - Fill form fields
  35  |     test('Test 2 - Fill form fields', async ({ page }) => {
  36  | 
  37  |         await page.locator('[name="ContactName"]')
  38  |             .fill('John Smith');
  39  | 
  40  |         await page.locator('[name="contactnumber"]')
  41  |             .fill('012-3456789');
  42  | 
  43  |         await page.locator('[name="pickupdate"]')
  44  |             .fill('2026-11-10');
  45  | 
  46  |         await page.locator('[name="payment"]')
  47  |             .selectOption('card');
  48  | 
  49  |         // Verify values
  50  |         await expect(
  51  |             page.locator('[name="ContactName"]')
  52  |         ).toHaveValue('John Smith');
  53  | 
  54  |         await expect(
  55  |             page.locator('[name="contactnumber"]')
  56  |         ).toHaveValue('012-3456789');
  57  | 
  58  |         await expect(
  59  |             page.locator('[name="pickupdate"]')
  60  |         ).toHaveValue('2026-11-10');
  61  | 
  62  |         await expect(
  63  |             page.locator('[name="payment"]')
  64  |         ).toHaveValue('card');
  65  | 
  66  |     });
  67  | 
  68  |     // Test 3 - Submit form and inspect response
  69  |     test('Test 3 - Submit valid form', async ({ page }) => {
  70  | 
  71  |         await page.locator('[name="ContactName"]')
  72  |             .fill('John Smith');
  73  | 
  74  |         await page.locator('[name="contactnumber"]')
  75  |             .fill('012-3456789');
  76  | 
  77  |         await page.locator('[name="pickupdate"]')
  78  |             .fill('2026-11-10');
  79  | 
  80  |         await page.locator('[name="payment"]')
  81  |             .selectOption('card');
  82  | 
  83  |         await page.getByRole('button', {
  84  |             name: 'Register'
  85  |         }).click();
  86  | 
  87  |         // Verify contact name validation
  88  |         await expect(
  89  |             page.getByText('Looks good!')
  90  |         ).toBeVisible();
  91  | 
  92  |         // Print the final page response
  93  |         console.log(
  94  |             'Final page response:',
  95  |             await page.locator('body').innerText()
  96  |         );
  97  | 
  98  |     });
  99  | 
  100 | });
  101 | 
```