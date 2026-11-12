# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day12-api-auth-ui.spec.js >> Authenticate through API and access browser application
- Location: tests\day12-api-auth-ui.spec.js:4:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://dummyjson.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner:
    - navigation [ref=e2]:
      - generic [ref=e3]:
        - link "DummyJSON" [ref=e4] [cursor=pointer]:
          - /url: /
        - list [ref=e5]:
          - listitem [ref=e6]:
            - link "Home" [ref=e7] [cursor=pointer]:
              - /url: /
          - listitem [ref=e8]:
            - link "Docs" [ref=e9] [cursor=pointer]:
              - /url: /docs
          - listitem [ref=e10]:
            - link "Tools" [ref=e11] [cursor=pointer]:
              - /url: /tools
          - listitem [ref=e12]:
            - link [ref=e13] [cursor=pointer]:
              - /url: https://github.com/Ovi/DummyJSON
              - img "Icon" [ref=e14]
              - text: GitHub
  - generic [ref=e15]:
    - generic [ref=e16]:
      - heading "Free Fake REST API for Placeholder JSON Data" [level=1] [ref=e17]
      - heading "Develop, Build, Test." [level=3] [ref=e19]
      - paragraph [ref=e20]: Get instant dummy JSON data for your frontend with DummyJSON Server — no backend setup needed!
      - generic [ref=e21]:
        - link [ref=e22] [cursor=pointer]:
          - /url: https://github.com/Ovi/DummyJSON
          - img "Icon" [ref=e23]
          - text: View on GitHub
        - link "Read Docs" [ref=e24] [cursor=pointer]:
          - /url: /docs
      - generic [ref=e25]:
        - text: Serving over
        - strong [ref=e26]: 500 million
        - text: requests monthly!
    - img "Image" [ref=e28]
    - img "arrow-down-icon" [ref=e29] [cursor=pointer]
  - complementary [ref=e30]:
    - generic [ref=e31]:
      - paragraph [ref=e32]: Proudly sponsored by
      - list [ref=e34]:
        - listitem [ref=e35]:
          - link [ref=e36] [cursor=pointer]:
            - /url: https://bly.to/s-dj
            - img "Bly.to" [ref=e37]
            - generic [ref=e38]:
              - heading "Bly.to" [level=3] [ref=e39]
              - paragraph [ref=e40]: Just POST a link. Get a short one back.
        - listitem [ref=e44]:
          - link [ref=e45] [cursor=pointer]:
            - /url: https://dummyinbox.com/?utm_source=dummyjson&utm_medium=sponsorship
            - img "DummyInbox" [ref=e46]
            - generic [ref=e47]:
              - heading "DummyInbox" [level=3] [ref=e48]
              - paragraph [ref=e49]: Get Free Temporary & Disposable Emails in seconds.
      - link "Become a sponsor" [ref=e54] [cursor=pointer]:
        - /url: https://github.com/sponsors/Ovi
    - img "arrow-down-icon" [ref=e55] [cursor=pointer]
  - generic [ref=e56]:
    - generic [ref=e57]:
      - heading "Say Goodbye to Boring Placeholder Text!" [level=2] [ref=e58]
      - paragraph [ref=e60]: Say goodbye to Lorem Ipsum! DummyJSON brings real JSON data to your frontend, letting you focus on development while we take care of data serving.
      - link "Try it Now?" [ref=e62] [cursor=pointer]:
        - /url: /docs
    - img "Image" [ref=e64]
    - img "arrow-down-icon" [ref=e65] [cursor=pointer]
  - generic [ref=e66]:
    - generic [ref=e67]:
      - heading "Ready-to-Use Resources for Your Projects" [level=2] [ref=e68]
      - paragraph [ref=e70]: Instantly access over 10 diverse datasets with our JSON Placeholder Data, speeding up frontend development and creating dynamic prototypes without backend hassles.
      - link "View More" [ref=e72] [cursor=pointer]:
        - /url: /docs
    - img "Image" [ref=e74]
    - img "arrow-down-icon" [ref=e75] [cursor=pointer]
  - generic [ref=e76]:
    - generic [ref=e77]:
      - heading "Placeholder Images? No Problem!" [level=2] [ref=e78]
      - paragraph [ref=e80]: Need images on the fly? DummyJSON Server creates dynamic placeholders instantly, no more image hunting or complex setups. Just add the URL and you're good to go!
      - link "Generate Now" [ref=e82] [cursor=pointer]:
        - /url: /docs/image
    - img "Placeholder Image" [ref=e84]
    - img "arrow-down-icon" [ref=e85] [cursor=pointer]
  - generic [ref=e86]:
    - generic [ref=e87]:
      - heading "Top Resources:" [level=2] [ref=e88]
      - paragraph [ref=e89]: Access real-life data, fully organized and ready to use, all in one place.
      - list [ref=e90]:
        - listitem [ref=e91]:
          - link [ref=e92] [cursor=pointer]:
            - /url: https://dummyjson.com/products
            - generic [ref=e95]:
              - heading "Products" [level=3] [ref=e96]
              - paragraph [ref=e97]: https://dummyjson.com/products
        - listitem [ref=e101]:
          - link [ref=e102] [cursor=pointer]:
            - /url: https://dummyjson.com/carts
            - generic [ref=e105]:
              - heading "Carts" [level=3] [ref=e106]
              - paragraph [ref=e107]: https://dummyjson.com/carts
        - listitem [ref=e111]:
          - link [ref=e112] [cursor=pointer]:
            - /url: https://dummyjson.com/users
            - generic [ref=e115]:
              - heading "Users" [level=3] [ref=e116]
              - paragraph [ref=e117]: https://dummyjson.com/users
        - listitem [ref=e121]:
          - link [ref=e122] [cursor=pointer]:
            - /url: https://dummyjson.com/posts
            - generic [ref=e125]:
              - heading "Posts" [level=3] [ref=e126]
              - paragraph [ref=e127]: https://dummyjson.com/posts
        - listitem [ref=e131]:
          - link [ref=e132] [cursor=pointer]:
            - /url: https://dummyjson.com/comments
            - generic [ref=e135]:
              - heading "Comments" [level=3] [ref=e136]
              - paragraph [ref=e137]: https://dummyjson.com/comments
        - listitem [ref=e141]:
          - link [ref=e142] [cursor=pointer]:
            - /url: https://dummyjson.com/quotes
            - generic [ref=e145]:
              - heading "Quotes" [level=3] [ref=e146]
              - paragraph [ref=e147]: https://dummyjson.com/quotes
        - listitem [ref=e151]:
          - link [ref=e152] [cursor=pointer]:
            - /url: https://dummyjson.com/todos
            - generic [ref=e155]:
              - heading "Todos" [level=3] [ref=e156]
              - paragraph [ref=e157]: https://dummyjson.com/todos
        - listitem [ref=e161]:
          - link [ref=e162] [cursor=pointer]:
            - /url: https://dummyjson.com/recipes
            - generic [ref=e165]:
              - heading "Recipes" [level=3] [ref=e166]
              - paragraph [ref=e167]: https://dummyjson.com/recipes
        - listitem [ref=e171]:
          - link [ref=e172] [cursor=pointer]:
            - /url: https://dummyjson.com/image
            - generic [ref=e175]:
              - heading "Image" [level=3] [ref=e176]
              - paragraph [ref=e177]: https://dummyjson.com/image
        - listitem [ref=e181]:
          - link [ref=e182] [cursor=pointer]:
            - /url: https://dummyjson.com/docs/auth
            - generic [ref=e185]:
              - heading "Auth" [level=3] [ref=e186]
              - paragraph [ref=e187]: https://dummyjson.com/docs/auth
    - img "arrow-down-icon" [ref=e191] [cursor=pointer]
  - generic [ref=e192]:
    - generic [ref=e193]:
      - heading "Try it yourself!" [level=2] [ref=e194]
      - paragraph [ref=e196]: Use the dropdown to get results for different resources.
      - generic [ref=e197]:
        - generic [ref=e198]:
          - text: "fetch(`https://dummyjson.com/"
          - generic [ref=e200] [cursor=pointer]:
            - radio "RESOURCE" [checked] [ref=e201]
            - generic [ref=e202]: RESOURCE
            - radio "products" [ref=e203]
            - generic [ref=e204]: products
            - radio "carts" [ref=e205]
            - generic [ref=e206]: carts
            - radio "users" [ref=e207]
            - generic [ref=e208]: users
            - radio "posts" [ref=e209]
            - generic [ref=e210]: posts
            - radio "comments" [ref=e211]
            - generic [ref=e212]: comments
            - radio "quotes" [ref=e213]
            - generic [ref=e214]: quotes
            - radio "recipes" [ref=e215]
            - generic [ref=e216]: recipes
            - radio "todos" [ref=e217]
            - generic [ref=e218]: todos
          - text: "`)"
        - code [ref=e221]: "{ \"💬\": \"🤔\" }"
      - link "View Docs" [ref=e223] [cursor=pointer]:
        - /url: /docs
    - img "arrow-down-icon" [ref=e224] [cursor=pointer]
  - generic [ref=e225]:
    - generic [ref=e226]:
      - heading "Custom Response" [level=2] [ref=e227]
      - paragraph [ref=e229]: Need a REST API for custom JSON data? Enter a response body below and click "Generate Now" to get your custom API URL.
      - generic [ref=e230]:
        - generic [ref=e231]:
          - generic [ref=e232]: // "response" body, what you expect from your custom API
          - button "Prettify" [ref=e233] [cursor=pointer]
        - code [ref=e236]: "{ \"foo\": \"bar\" }"
      - textbox "https://dummyjson.com/c/abcd-1234" [ref=e238]
      - generic [ref=e239]:
        - button [ref=e240] [cursor=pointer]:
          - img "Icon" [ref=e241]
          - text: Generate Now
        - link "More Info" [ref=e242] [cursor=pointer]:
          - /url: /custom-response
    - img "arrow-down-icon" [ref=e243] [cursor=pointer]
  - generic [ref=e245]:
    - heading "Thank you!" [level=2] [ref=e246]
    - paragraph [ref=e248]:
      - text: Thank you for being a part of the DummyJSON community. If you have not already,
      - link [ref=e249] [cursor=pointer]:
        - /url: https://buymeacoffee.com/muhammadovi
        - text: Buy me a coffee
        - img "Coffee Icon" [ref=e250]
      - link "And give DummyJSON star on GitHub!" [ref=e251] [cursor=pointer]:
        - /url: https://github.com/Ovi/DummyJSON
      - generic [ref=e252]:
        - link [ref=e253] [cursor=pointer]:
          - /url: https://github.com/Ovi/DummyJSON
          - img "Github" [ref=e254]
        - link [ref=e255] [cursor=pointer]:
          - /url: https://x.com/DummyJSON
          - img "Github" [ref=e256]
        - link [ref=e257] [cursor=pointer]:
          - /url: https://linkedin.com/company/DummyJSON
          - img "Github" [ref=e258]
```

# Test source

```ts
  1  | 
  2  | const { test, expect } = require('@playwright/test');
  3  | 
  4  | test('Authenticate through API and access browser application', async ({
  5  |   request,
  6  |   page,
  7  | }) => {
  8  | 
  9  |   // Step 1: Login through API
  10 |   const loginResponse = await request.post(
  11 |     'https://dummyjson.com/auth/login',
  12 |     {
  13 |       data: {
  14 |         username: 'emilys',
  15 |         password: 'emilyspass',
  16 |         expiresInMins: 30,
  17 |       },
  18 |     }
  19 |   );
  20 | 
  21 |   expect(loginResponse.status()).toBe(200);
  22 | 
  23 |   const loginData = await loginResponse.json();
  24 | 
  25 |   const accessToken = loginData.accessToken;
  26 | 
  27 |   expect(accessToken).toBeTruthy();
  28 | 
  29 |   console.log('API authentication successful');
  30 | 
  31 |   // Step 2: Open browser application
> 32 |   await page.goto('https://dummyjson.com');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  33 | 
  34 |   // Step 3: Store token in browser localStorage
  35 |   await page.evaluate((token) => {
  36 |     localStorage.setItem('accessToken', token);
  37 |   }, accessToken);
  38 | 
  39 |   // Step 4: Verify token was stored
  40 |   const storedToken = await page.evaluate(() => {
  41 |     return localStorage.getItem('accessToken');
  42 |   });
  43 | 
  44 |   expect(storedToken).toBe(accessToken);
  45 | 
  46 |   console.log('Access token stored in browser');
  47 | 
  48 | });
  49 | 
  50 | 
  51 | 
  52 | // ----------------------- Understand important concepts -----------------------
  53 | // request.post()	------> Authenticate through API
  54 | // response.json()	------ > Read access token
  55 | // page.goto()	----------> Open browser application
  56 | // page.evaluate()	----------> Execute JavaScript in browser
  57 | // localStorage.setItem() ----------> 	Store token
  58 | // localStorage.getItem() ----------> 	Read stored token
  59 | 
  60 | 
  61 | 
  62 | 
```