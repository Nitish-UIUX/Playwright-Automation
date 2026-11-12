# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day8-network-basics.spec.js >> Monitor browser network requests
- Location: tests\day8-network-basics.spec.js:3:5

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
        - link "json-server ★ 75.7k" [ref=e34] [cursor=pointer]:
          - /url: https://github.com/typicode/json-server
          - generic [ref=e35]: json-server
          - generic [ref=e36]: ★ 75.7k
        - link "lowdb ★ 22.6k" [ref=e37] [cursor=pointer]:
          - /url: https://github.com/typicode/lowdb
          - generic [ref=e38]: lowdb
          - generic [ref=e39]: ★ 22.6k
    - generic [ref=e40]:
      - heading "Sponsors" [level=2] [ref=e41]
      - paragraph [ref=e42]:
        - text: JSONPlaceholder is supported by the following companies and
        - link "sponsors" [ref=e43] [cursor=pointer]:
          - /url: https://github.com/sponsors/typicode
        - text: on GitHub.
      - generic [ref=e44]:
        - link [ref=e45] [cursor=pointer]:
          - /url: https://mockend.com
          - img "Mockend" [ref=e46]
        - link "Zuplo":
          - /url: https://zuplo.link/json-server-web
          - img "Zuplo"
        - link "SerpApi":
          - /url: https://serpapi.com/?utm_source=typicode
          - img "SerpApi"
        - link "Your company logo here" [ref=e47] [cursor=pointer]:
          - /url: https://github.com/sponsors/typicode
    - generic [ref=e48]:
      - heading "Guide" [level=2] [ref=e49]
      - paragraph [ref=e50]:
        - text: Examples use the
        - link "Fetch API" [ref=e51] [cursor=pointer]:
          - /url: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
        - text: ", but any HTTP client works."
      - tablist "Examples" [ref=e52]:
        - tab "Get" [selected] [ref=e53]
        - tab "List" [ref=e54]
        - tab "Create" [ref=e55]
        - tab "Update" [ref=e56]
        - tab "Patch" [ref=e57]
        - tab "Delete" [ref=e58]
        - tab "Filter" [ref=e59]
        - tab "Nested" [ref=e60]
      - tabpanel "Get" [ref=e61]:
        - generic [ref=e62]:
          - code [ref=e64]:
            - generic [ref=e65]: fetch('https://jsonplaceholder.typicode.com/posts/1')
            - generic [ref=e66]: .then(response => response.json())
            - generic [ref=e67]: .then(json => console.log(json))
          - button "Copy to clipboard" [ref=e68]
        - paragraph [ref=e73]: Response
        - code [ref=e75]:
          - generic [ref=e76]: "{"
          - generic [ref=e77]: "\"userId\": 1,"
          - generic [ref=e78]: "\"id\": 1,"
          - generic [ref=e79]: "\"title\": \"sunt aut facere repellat provident occaecati excepturi optio reprehenderit\","
          - generic [ref=e80]: "\"body\": \"quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto\""
          - generic [ref=e81]: "}"
    - generic [ref=e82]:
      - heading "Resources" [level=2] [ref=e83]
      - paragraph [ref=e84]: JSONPlaceholder comes with a set of 6 common resources.
      - table [ref=e85]:
        - rowgroup [ref=e86]:
          - row [ref=e87]:
            - cell [ref=e88]:
              - link "/posts" [ref=e89] [cursor=pointer]:
                - /url: /posts
            - cell "100 posts" [ref=e90]
          - row [ref=e91]:
            - cell [ref=e92]:
              - link "/comments" [ref=e93] [cursor=pointer]:
                - /url: /comments
            - cell "500 comments" [ref=e94]
          - row [ref=e95]:
            - cell [ref=e96]:
              - link "/albums" [ref=e97] [cursor=pointer]:
                - /url: /albums
            - cell "100 albums" [ref=e98]
          - row [ref=e99]:
            - cell [ref=e100]:
              - link "/photos" [ref=e101] [cursor=pointer]:
                - /url: /photos
            - cell "5000 photos" [ref=e102]
          - row [ref=e103]:
            - cell [ref=e104]:
              - link "/todos" [ref=e105] [cursor=pointer]:
                - /url: /todos
            - cell "200 todos" [ref=e106]
          - row [ref=e107]:
            - cell [ref=e108]:
              - link "/users" [ref=e109] [cursor=pointer]:
                - /url: /users
            - cell "10 users" [ref=e110]
      - paragraph [ref=e111]:
        - text: "Resources have relations. For example: posts have many comments, albums have many photos. See"
        - link "nested routes" [ref=e112] [cursor=pointer]:
          - /url: "#nested"
        - text: for the full list.
    - generic [ref=e113]:
      - heading "Routes" [level=2] [ref=e114]
      - paragraph [ref=e115]: All HTTP methods are supported. You can use http or https for your requests.
      - table [ref=e116]:
        - rowgroup [ref=e117]:
          - row [ref=e118]:
            - cell "GET" [ref=e119]
            - cell [ref=e120]:
              - link "/posts" [ref=e121] [cursor=pointer]:
                - /url: /posts
          - row [ref=e122]:
            - cell "GET" [ref=e123]
            - cell [ref=e124]:
              - link "/posts/1" [ref=e125] [cursor=pointer]:
                - /url: /posts/1
          - row [ref=e126]:
            - cell "GET" [ref=e127]
            - cell [ref=e128]:
              - link "/posts/1/comments" [ref=e129] [cursor=pointer]:
                - /url: /posts/1/comments
          - row [ref=e130]:
            - cell "GET" [ref=e131]
            - cell [ref=e132]:
              - link "/comments?postId=1" [ref=e133] [cursor=pointer]:
                - /url: /comments?postId=1
          - row [ref=e134]:
            - cell "POST" [ref=e135]
            - cell "/posts" [ref=e136]
          - row [ref=e137]:
            - cell "PUT" [ref=e138]
            - cell "/posts/1" [ref=e139]
          - row [ref=e140]:
            - cell "PATCH" [ref=e141]
            - cell "/posts/1" [ref=e142]
          - row [ref=e143]:
            - cell "DELETE" [ref=e144]
            - cell "/posts/1" [ref=e145]
    - generic [ref=e146]:
      - heading "Need your own data?" [level=2] [ref=e147]
      - paragraph [ref=e148]:
        - link "Mockend" [ref=e149] [cursor=pointer]:
          - /url: https://mockend.com
        - text: gives you a fake API per developer, agent or feature, from a single file in your GitHub repo.
  - contentinfo [ref=e150]:
    - paragraph [ref=e151]:
      - text: Coded and maintained with ❤️ by
      - link "typicode" [ref=e152] [cursor=pointer]:
        - /url: https://github.com/typicode
      - text: © 2013 - today. You can
      - link "sponsor this project" [ref=e153] [cursor=pointer]:
        - /url: https://github.com/sponsors/typicode
      - text: .
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Monitor browser network requests', async ({ page }) => {
  4  | 
  5  |     // Listen for browser requests
  6  |     page.on('request', request => {
  7  |         console.log('REQUEST:', request.method(), request.url());
  8  |     });
  9  | 
  10 |     // Listen for browser responses
  11 |     page.on('response', response => {
  12 |         console.log(
  13 |             'RESPONSE:',
  14 |             response.status(),
  15 |             response.url()
  16 |         );
  17 |     });
  18 | 
  19 |     // Open a demo website
> 20 |     await page.goto('https://jsonplaceholder.typicode.com/');
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  21 | 
  22 |     // Verify page title
  23 |     await expect(page).toHaveTitle(/JSONPlaceholder/);
  24 | 
  25 | });
  26 | 
  27 | 
  28 | 
```