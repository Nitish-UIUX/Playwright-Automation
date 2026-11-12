# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day8-network-mini-project.spec.js >> Day 8 - Network Interception Mini Project >> Test 2 - Mock API response
- Location: tests\day8-network-mini-project.spec.js:39:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://jsonplaceholder.typicode.com/", waiting until "load"

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | const BASE_URL = 'https://jsonplaceholder.typicode.com';
  4   | 
  5   | test.describe('Day 8 - Network Interception Mini Project', () => {
  6   | 
  7   |     // This test suite covers various network interception scenarios including monitoring requests and responses, mocking API responses, modifying request headers, blocking requests, and validating API response status.
  8   |     test('Test 1 - Monitor API request and response', async ({ page }) => {
  9   | 
  10  |         const requests = [];
  11  |         const responses = [];
  12  | 
  13  |         page.on('request', request => {
  14  |             if (request.url().includes('/posts/1')) {
  15  |                 requests.push(request.url());
  16  |             }
  17  |         });
  18  | 
  19  |         page.on('response', response => {
  20  |             if (response.url().includes('/posts/1')) {
  21  |                 responses.push(response.status());
  22  |             }
  23  |         });
  24  | 
  25  |         await page.goto(BASE_URL);
  26  | 
  27  |         await page.evaluate(async () => {
  28  |             await fetch('/posts/1');
  29  |         });
  30  | 
  31  |         expect(requests.length).toBe(1);
  32  |         expect(responses).toContain(200);
  33  | 
  34  |         console.log('Requests:', requests);
  35  |         console.log('Responses:', responses);
  36  |     });
  37  | 
  38  | // Test 2 covers mocking API responses to return custom data instead of making actual network requests.
  39  |     test('Test 2 - Mock API response', async ({ page }) => {
  40  | 
  41  |         const mockPosts = [
  42  |             {
  43  |                 userId: 1,
  44  |                 id: 101,
  45  |                 title: 'Mocked Playwright Post',
  46  |                 body: 'Testing with mocked API data'
  47  |             }
  48  |         ];
  49  | 
  50  |         await page.route(`${BASE_URL}/posts`, async route => {
  51  | 
  52  |             await route.fulfill({
  53  |                 status: 200,
  54  |                 contentType: 'application/json',
  55  |                 body: JSON.stringify(mockPosts)
  56  |             });
  57  | 
  58  |         });
  59  | 
> 60  |         await page.goto(BASE_URL);
      |                    ^ Error: page.goto: Test timeout of 30000ms exceeded.
  61  | 
  62  |         const posts = await page.evaluate(async () => {
  63  |             const response = await fetch('/posts');
  64  |             return response.json();
  65  |         });
  66  | 
  67  |         expect(posts).toHaveLength(1);
  68  |         expect(posts[0].id).toBe(101);
  69  | 
  70  |         console.log('Mocked API Data:', posts);
  71  |     });
  72  | 
  73  | 
  74  |     // Test 3 covers modifying request headers before sending them to the server.
  75  |     test('Test 3 - Modify request headers', async ({ page }) => {
  76  | 
  77  |         let modifiedHeader = '';
  78  | 
  79  |         await page.route(`${BASE_URL}/posts/1`, async route => {
  80  | 
  81  |             const headers = {
  82  |                 ...route.request().headers(),
  83  |                 'x-test-client': 'playwright'
  84  |             };
  85  | 
  86  |             modifiedHeader = headers['x-test-client'];
  87  | 
  88  |             await route.continue({ headers });
  89  |         });
  90  | 
  91  |         await page.goto(BASE_URL);
  92  | 
  93  |         const response = await page.evaluate(async () => {
  94  |             return fetch('/posts/1').then(res => res.json());
  95  |         });
  96  | 
  97  |         expect(modifiedHeader).toBe('playwright');
  98  |         expect(response.id).toBe(1);
  99  | 
  100 |         console.log('Modified Header:', modifiedHeader);
  101 |     });
  102 | 
  103 | 
  104 |     // Test 4 covers blocking specific API requests to prevent them from reaching the server.
  105 |     test('Test 4 - Block an API request', async ({ page }) => {
  106 | 
  107 |         let requestBlocked = false;
  108 | 
  109 |         await page.route(`${BASE_URL}/posts/2`, async route => {
  110 | 
  111 |             requestBlocked = true;
  112 | 
  113 |             await route.abort();
  114 |         });
  115 | 
  116 |         await page.goto(BASE_URL);
  117 | 
  118 |         const result = await page.evaluate(async () => {
  119 | 
  120 |             try {
  121 |                 await fetch('/posts/2');
  122 |                 return 'Request succeeded';
  123 |             } catch (error) {
  124 |                 return 'Request blocked';
  125 |             }
  126 | 
  127 |         });
  128 | 
  129 |         expect(requestBlocked).toBe(true);
  130 |         expect(result).toBe('Request blocked');
  131 | 
  132 |         console.log('Blocked Request:', result);
  133 |     });
  134 | 
  135 | 
  136 |     // Test 5 covers validating the status of API responses to ensure they meet expected criteria.
  137 |     test('Test 5 - Validate API response status', async ({ page }) => {
  138 | 
  139 |         await page.goto(BASE_URL);
  140 | 
  141 |         const responsePromise = page.waitForResponse(
  142 |             response => response.url().endsWith('/posts/1')
  143 |         );
  144 | 
  145 |         const post = await page.evaluate(async () => {
  146 |             const response = await fetch('/posts/1');
  147 |             return response.json();
  148 |         });
  149 | 
  150 |         const response = await responsePromise;
  151 | 
  152 |         expect(response.status()).toBe(200);
  153 |         expect(post.id).toBe(1);
  154 |         expect(post.title).toBeTruthy();
  155 | 
  156 |         console.log('Status:', response.status());
  157 |         console.log('Post:', post.title);
  158 |     });
  159 | 
  160 | });
```