# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day8-network-mini-project.spec.js >> Day 8 - Network Interception Mini Project >> Test 3 - Modify request headers
- Location: tests\day8-network-mini-project.spec.js:75:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://jsonplaceholder.typicode.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - link "JSONPlaceholder" [ref=e3] [cursor=pointer]:
      - /url: /
    - navigation "Primary" [ref=e4]:
      - link "Guide" [ref=e5] [cursor=pointer]:
        - /url: "#guide"
      - link "Sponsors" [ref=e6] [cursor=pointer]:
        - /url: "#sponsors"
      - link "Blog" [ref=e7] [cursor=pointer]:
        - /url: https://blog.typicode.com
      - link "GitHub" [ref=e8] [cursor=pointer]:
        - /url: https://github.com/typicode/jsonplaceholder
      - link "My JSON Server" [ref=e9] [cursor=pointer]:
        - /url: https://my-json-server.typicode.com
  - main [ref=e10]:
    - generic [ref=e11]:
      - paragraph [ref=e12]: The free fake REST API, since 2013
      - heading "Fake data you can rely on." [level=1] [ref=e13]
      - paragraph [ref=e14]: "JSONPlaceholder is a free online REST API that you can use whenever you need some fake data: in documentation and tutorials, in code examples, in a quick prototype, or simply to test things locally."
      - generic [ref=e15]:
        - generic [ref=e16]:
          - term [ref=e17]: 120 billion requests / month
          - definition [ref=e18]:
            - text: Free for everyone, and it stays that way.
            - strong [ref=e19]: No signup, no API key.
        - generic [ref=e20]:
          - term [ref=e21]: Since 2013
          - definition [ref=e22]:
            - text: Same routes, same responses.
            - strong [ref=e23]: Code written against it a decade ago still works.
      - paragraph [ref=e24]:
        - button "https://jsonplaceholder.typicode.com" [ref=e25]
      - paragraph [ref=e32]:
        - generic [ref=e33]: Powered by
        - link "json-server ★ 75734" [ref=e34] [cursor=pointer]:
          - /url: https://github.com/typicode/json-server
          - generic [ref=e35]: json-server
          - generic [ref=e36]: ★ 75734
        - link "lowdb ★ 22579" [ref=e37] [cursor=pointer]:
          - /url: https://github.com/typicode/lowdb
          - generic [ref=e38]: lowdb
          - generic [ref=e39]: ★ 22579
    - generic [ref=e40]:
      - heading "Sponsors" [level=2] [ref=e41]
      - paragraph [ref=e42]:
        - text: JSONPlaceholder is supported by the following companies and
        - link "sponsors" [ref=e43] [cursor=pointer]:
          - /url: https://github.com/sponsors/typicode
        - text: on GitHub.
      - generic [ref=e44]:
        - link "Mockend":
          - /url: https://mockend.com
          - img "Mockend"
        - link "Zuplo":
          - /url: https://zuplo.link/json-server-web
          - img "Zuplo"
        - link "SerpApi":
          - /url: https://serpapi.com/?utm_source=typicode
          - img "SerpApi"
        - link "Your company logo here" [ref=e45] [cursor=pointer]:
          - /url: https://github.com/sponsors/typicode
    - generic [ref=e46]:
      - heading "Guide" [level=2] [ref=e47]
      - paragraph [ref=e48]:
        - text: Examples use the
        - link "Fetch API" [ref=e49] [cursor=pointer]:
          - /url: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
        - text: ", but any HTTP client works."
      - tablist "Examples" [ref=e50]:
        - tab "Get" [selected] [ref=e51]
        - tab "List" [ref=e52]
        - tab "Create" [ref=e53]
        - tab "Update" [ref=e54]
        - tab "Patch" [ref=e55]
        - tab "Delete" [ref=e56]
        - tab "Filter" [ref=e57]
        - tab "Nested" [ref=e58]
      - tabpanel "Get" [ref=e59]:
        - generic [ref=e60]:
          - code [ref=e62]:
            - generic [ref=e63]: fetch('https://jsonplaceholder.typicode.com/posts/1')
            - generic [ref=e64]: .then(response => response.json())
            - generic [ref=e65]: .then(json => console.log(json))
          - button "Copy to clipboard" [ref=e66]
        - paragraph [ref=e71]: Response
        - code [ref=e73]:
          - generic [ref=e74]: "{"
          - generic [ref=e75]: "\"userId\": 1,"
          - generic [ref=e76]: "\"id\": 1,"
          - generic [ref=e77]: "\"title\": \"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\","
          - generic [ref=e78]: "\"body\": \"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\""
          - generic [ref=e79]: "}"
    - generic [ref=e80]:
      - heading "Resources" [level=2] [ref=e81]
      - paragraph [ref=e82]: JSONPlaceholder comes with a set of 6 common resources.
      - table [ref=e83]:
        - rowgroup [ref=e84]:
          - row [ref=e85]:
            - cell [ref=e86]:
              - link "/posts" [ref=e87] [cursor=pointer]:
                - /url: /posts
            - cell "100 posts" [ref=e88]
          - row [ref=e89]:
            - cell [ref=e90]:
              - link "/comments" [ref=e91] [cursor=pointer]:
                - /url: /comments
            - cell "500 comments" [ref=e92]
          - row [ref=e93]:
            - cell [ref=e94]:
              - link "/albums" [ref=e95] [cursor=pointer]:
                - /url: /albums
            - cell "100 albums" [ref=e96]
          - row [ref=e97]:
            - cell [ref=e98]:
              - link "/photos" [ref=e99] [cursor=pointer]:
                - /url: /photos
            - cell "5000 photos" [ref=e100]
          - row [ref=e101]:
            - cell [ref=e102]:
              - link "/todos" [ref=e103] [cursor=pointer]:
                - /url: /todos
            - cell "200 todos" [ref=e104]
          - row [ref=e105]:
            - cell [ref=e106]:
              - link "/users" [ref=e107] [cursor=pointer]:
                - /url: /users
            - cell "10 users" [ref=e108]
      - paragraph [ref=e109]:
        - text: "Resources have relations. For example: posts have many comments, albums have many photos. See"
        - link "nested routes" [ref=e110] [cursor=pointer]:
          - /url: "#nested"
        - text: for the full list.
    - generic [ref=e111]:
      - heading "Routes" [level=2] [ref=e112]
      - paragraph [ref=e113]: All HTTP methods are supported. You can use http or https for your requests.
      - table [ref=e114]:
        - rowgroup [ref=e115]:
          - row [ref=e116]:
            - cell "GET" [ref=e117]
            - cell [ref=e118]:
              - link "/posts" [ref=e119] [cursor=pointer]:
                - /url: /posts
          - row [ref=e120]:
            - cell "GET" [ref=e121]
            - cell [ref=e122]:
              - link "/posts/1" [ref=e123] [cursor=pointer]:
                - /url: /posts/1
          - row [ref=e124]:
            - cell "GET" [ref=e125]
            - cell [ref=e126]:
              - link "/posts/1/comments" [ref=e127] [cursor=pointer]:
                - /url: /posts/1/comments
          - row [ref=e128]:
            - cell "GET" [ref=e129]
            - cell [ref=e130]:
              - link "/comments?postId=1" [ref=e131] [cursor=pointer]:
                - /url: /comments?postId=1
          - row [ref=e132]:
            - cell "POST" [ref=e133]
            - cell "/posts" [ref=e134]
          - row [ref=e135]:
            - cell "PUT" [ref=e136]
            - cell "/posts/1" [ref=e137]
          - row [ref=e138]:
            - cell "PATCH" [ref=e139]
            - cell "/posts/1" [ref=e140]
          - row [ref=e141]:
            - cell "DELETE" [ref=e142]
            - cell "/posts/1" [ref=e143]
    - generic [ref=e144]:
      - heading "Need your own data?" [level=2] [ref=e145]
      - paragraph [ref=e146]:
        - link "Mockend" [ref=e147] [cursor=pointer]:
          - /url: https://mockend.com
        - text: gives you a fake API per developer, agent or feature, from a single file in your GitHub repo.
  - contentinfo [ref=e148]:
    - paragraph [ref=e149]:
      - text: Coded and maintained with ❤️ by
      - link "typicode" [ref=e150] [cursor=pointer]:
        - /url: https://github.com/typicode
      - text: © 2013 - today. You can
      - link "sponsor this project" [ref=e151] [cursor=pointer]:
        - /url: https://github.com/sponsors/typicode
      - text: .
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
  60  |         await page.goto(BASE_URL);
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
> 91  |         await page.goto(BASE_URL);
      |                    ^ Error: page.goto: Test timeout of 30000ms exceeded.
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
  161 | 
  162 | 
  163 | // page.on('request') – Monitor outgoing requests.
  164 | 
  165 | // page.on('response') – Monitor incoming responses.
  166 | 
  167 | // page.waitForResponse() – Wait for a specific response.
  168 | 
  169 | // page.route() – Intercept network requests.
  170 | 
  171 | // route.fulfill() – Return custom response data.
  172 | 
  173 | // route.continue() – Continue the request.
  174 | 
  175 | // route.abort() – Block the request.
```