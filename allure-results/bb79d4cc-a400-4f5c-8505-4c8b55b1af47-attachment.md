# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: day1.spec.js >> verify the Freecomers website title
- Location: tests\day1.spec.js:76:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://freecomers.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - alert [ref=e2]
  - generic [ref=e3]:
    - banner [ref=e4]:
      - generic [ref=e5]:
        - link [ref=e6] [cursor=pointer]:
          - /url: /
          - img "Freecomers" [ref=e7]
        - generic [ref=e8]:
          - button "Discover Festivals" [ref=e9] [cursor=pointer]
          - button "Network" [ref=e14] [cursor=pointer]
          - button "Filmy Friday" [ref=e21] [cursor=pointer]
          - button "Home" [ref=e26] [cursor=pointer]
        - generic [ref=e31]:
          - button [ref=e32] [cursor=pointer]
          - button "Join Free" [ref=e35] [cursor=pointer]
          - button "Sign In" [ref=e36] [cursor=pointer]
    - main [ref=e37]:
      - generic [ref=e40]:
        - generic [ref=e44]:
          - paragraph [ref=e45]: Which festival should you submit to?
          - paragraph [ref=e46]: Tell Festy about your film - get matched festivals in minutes.
        - button "Find My Festivals" [ref=e47] [cursor=pointer]
      - generic [ref=e48]:
        - generic [ref=e49]:
          - heading "Where Filmmakers Meet Festivals" [level=1] [ref=e50]: Where FilmmakersMeet Festivals
          - paragraph [ref=e51]: Submit smarter. Connect faster.
          - generic [ref=e52]:
            - button "Join Freecomers" [ref=e53] [cursor=pointer]
            - button "List Your Festivals" [ref=e54] [cursor=pointer]
            - button "Explore Festivals" [ref=e55] [cursor=pointer]
          - paragraph [ref=e56]: Public Beta— actively collecting feedback
        - generic [ref=e59]:
          - paragraph [ref=e61]:
            - generic [ref=e62]: 1,700+
            - text: Filmmakers
          - paragraph [ref=e66]:
            - generic [ref=e67]: 12k+
            - text: Posts and reviews shared
          - paragraph [ref=e71]:
            - generic [ref=e72]: 50+
            - text: Festivals Onboarding In Progress
          - paragraph [ref=e76]:
            - generic [ref=e77]: "9"
            - text: Filmy Friday sessions completed
          - paragraph [ref=e81]: Latest Industry News and Updates
          - paragraph [ref=e85]:
            - generic [ref=e86]: 1,700+
            - text: Filmmakers
          - paragraph [ref=e90]:
            - generic [ref=e91]: 12k+
            - text: Posts and reviews shared
          - paragraph [ref=e95]:
            - generic [ref=e96]: 50+
            - text: Festivals Onboarding In Progress
          - paragraph [ref=e100]:
            - generic [ref=e101]: "9"
            - text: Filmy Friday sessions completed
          - paragraph [ref=e105]: Latest Industry News and Updates
      - generic [ref=e108]:
        - generic [ref=e110]:
          - generic [ref=e111]:
            - generic [ref=e112]: Live Now
            - paragraph [ref=e116]: Filmmakers
            - heading "Submit to Film Festivals" [level=5] [ref=e117]
            - paragraph [ref=e118]: Smarter festival picks, lower submission costs.
          - generic [ref=e119]:
            - button "Submit to Festivals →" [ref=e120] [cursor=pointer]
            - generic [ref=e121]: 🎯
          - generic [ref=e122]: "01"
        - generic [ref=e124]:
          - generic [ref=e125]:
            - generic [ref=e126]: Live Now
            - paragraph [ref=e130]: Film Festivals
            - heading "Reach Filmmakers" [level=5] [ref=e131]
            - paragraph [ref=e132]: List your festival, receive submissions, manage your jury. Thousands of filmmakers already here.
          - generic [ref=e133]:
            - button "Start Listing →" [ref=e134] [cursor=pointer]
            - generic [ref=e135]: 🎪
          - generic [ref=e136]: "02"
        - generic [ref=e138]:
          - generic [ref=e139]:
            - generic [ref=e140]: Live Now
            - paragraph [ref=e144]: Filmmakers / Film Organizations
            - heading "Build Your Film Profile" [level=5] [ref=e145]
            - paragraph [ref=e146]: Add your credits, showcase your work, and connect with festivals. Whether you're an independent filmmaker or part of a production or distribution team, your profile is your portfolio.
          - generic [ref=e147]:
            - button "Create Your Profile →" [ref=e148] [cursor=pointer]
            - generic [ref=e149]: 🎬
          - generic [ref=e150]: "03"
        - generic [ref=e152]:
          - generic [ref=e153]:
            - generic [ref=e154]: Live Now
            - paragraph [ref=e158]: Film Lovers
            - heading "Review & Recommend Films" [level=5] [ref=e159]
            - paragraph [ref=e160]: Rate it, Recommend it. This is where people who care about cinema actually talk about cinema.
          - generic [ref=e161]:
            - button "Create a Post →" [ref=e162] [cursor=pointer]
            - generic [ref=e163]: ⭐
          - generic [ref=e164]: "04"
      - generic [ref=e165]:
        - generic [ref=e166]:
          - heading "See what others are creating, submitting, & celebrating" [level=2] [ref=e167]
          - list [ref=e168]:
            - listitem [ref=e169]:
              - generic [ref=e174]: See real updates from directors, writers, and creators
            - listitem [ref=e176]:
              - generic [ref=e181]: Discover films, projects, and works in progress
            - listitem [ref=e183]:
              - generic [ref=e188]: Get behind-the-scenes insights from active productions
            - listitem [ref=e190]:
              - generic [ref=e195]: Engage with posts through likes, comments, and shares
            - listitem [ref=e197]:
              - generic [ref=e202]: Find collaborators and connect instantly
            - listitem [ref=e204]:
              - generic [ref=e209]: Stay inspired by what the community is creating
          - generic [ref=e211]:
            - button "Join Now - It's Free" [ref=e212] [cursor=pointer]
            - button "Explore Profile" [ref=e213] [cursor=pointer]
        - generic [ref=e215]:
          - textbox "freecomers.com/username" [disabled] [ref=e225]
          - paragraph [ref=e226]: We couldn't find any spotlight posts at the moment. Please check back later!
      - generic [ref=e228]:
        - heading "Supported and Incubated at" [level=2] [ref=e229]
        - generic [ref=e230]:
          - img "Partner Company 1" [ref=e233]
          - img "Partner Company 4" [ref=e236]
          - img "Partner Company 2" [ref=e239]
          - img "Partner Company 3" [ref=e242]
          - img "Partner Company 5" [ref=e245]
      - generic [ref=e247]:
        - heading "Trusted by Film Professionals" [level=2] [ref=e248]
        - paragraph [ref=e249]: Insights from the people who make Freecomers what it is.
        - paragraph [ref=e250]: We couldn't find any testimonials at the moment. Please check back later!
      - generic [ref=e251]:
        - heading "Your Film Journey Starts here" [level=2] [ref=e252]
        - paragraph [ref=e253]: Join thousands of filmmakers and festivals already on Freecomers.
        - generic [ref=e254]:
          - button "Join Freecomers" [ref=e255] [cursor=pointer]
          - button "List Your Festivals" [ref=e256] [cursor=pointer]
    - contentinfo [ref=e257]:
      - generic [ref=e258]:
        - generic [ref=e260]:
          - link [ref=e261] [cursor=pointer]:
            - /url: /
            - img "Freecomers" [ref=e262]
          - paragraph [ref=e263]: Freecomers is a data driven film festival intelligence and networking platform that helps filmmakers discover the right festivals, optimize their submission strategy and connect with the global film ecosystem while enabling film lovers to engage with curated, high quality cinema.
          - generic [ref=e264]:
            - button [ref=e265] [cursor=pointer]
            - button [ref=e268] [cursor=pointer]
            - button [ref=e271] [cursor=pointer]
            - button [ref=e274] [cursor=pointer]
            - button [ref=e277] [cursor=pointer]
        - generic [ref=e280]:
          - heading "Help" [level=5] [ref=e281]
          - generic [ref=e282]:
            - link "FAQs" [ref=e283] [cursor=pointer]:
              - /url: /faqs
            - link "About" [ref=e284] [cursor=pointer]:
              - /url: /about
            - link "Contact" [ref=e285] [cursor=pointer]:
              - /url: /contact
        - generic [ref=e286]:
          - heading "Legal Pages" [level=5] [ref=e287]
          - generic [ref=e288]:
            - link "Terms & Conditions" [ref=e289] [cursor=pointer]:
              - /url: /terms
            - link "Privacy Policy" [ref=e290] [cursor=pointer]:
              - /url: /privacy
            - link "Disclaimer" [ref=e291] [cursor=pointer]:
              - /url: /disclaimer
      - paragraph [ref=e293]:
        - text: © 2026
        - link "Freecomers Filmtech Pvt Ltd ." [ref=e294] [cursor=pointer]:
          - /url: /
        - text: "| All Rights Reserved."
```

# Test source

```ts
  1  | 
  2  | const { test, expect } = require('@playwright/test');
  3  | 
  4  | // Test to verify the Playwright website title
  5  | test('verify the Playwright website title', async ({ page }) => {
  6  |   await page.goto('https://playwright.dev/');
  7  | 
  8  |   await expect(page).toHaveTitle(/Playwright/);
  9  | });
  10 | 
  11 | // Test to verify the "Get started" link is visible
  12 | test('verify the documentation link is visible', async ({ page }) => {
  13 |   await page.goto('https://playwright.dev/');
  14 | 
  15 |   await expect(
  16 |     page.getByRole('link', { name: 'Get started' })
  17 |   ).toBeVisible();
  18 | });
  19 | 
  20 | 
  21 | // Test to click "Get started" and verify the Installation page is visible
  22 | test('click Get started and verify Installation page', async ({ page }) => {
  23 |   await page.goto('https://playwright.dev/');
  24 | 
  25 |   await page.getByRole('link', { name: 'Get started' }).click();
  26 | 
  27 |   await expect(
  28 |     page.getByRole('heading', { name: 'Installation' })
  29 |   ).toBeVisible();
  30 | });
  31 | 
  32 | // Search for a specific element on the page and verify it is visible
  33 | 
  34 | test('search Playwright documentation', async ({ page }) => {
  35 |   await page.goto('https://playwright.dev/');
  36 | 
  37 |   // Open the documentation search.
  38 |   await page.getByRole('button', { name: 'Search' }).click();
  39 | 
  40 |   // Find the search input and enter a query.
  41 |   const searchInput = page.getByRole('searchbox');
  42 |   await searchInput.fill('locators');
  43 | 
  44 |   // Verify that the search query was entered.
  45 |   await expect(searchInput).toHaveValue('locators');
  46 | });
  47 | 
  48 | 
  49 | // verify the search results are visible
  50 | 
  51 | test('verify search results for locators', async ({ page }) => {
  52 |   await page.goto('https://playwright.dev/');
  53 | 
  54 |   await page.getByRole('button', { name: 'Search' }).click();
  55 | 
  56 |   const searchInput = page.getByRole('searchbox');
  57 |   await searchInput.fill('locators');
  58 | 
  59 |   // Verify that the matching search result is visible.
  60 |   await expect(
  61 |     page.getByRole('link', { name: 'Locators', exact: true })
  62 |   ).toBeVisible();
  63 | });
  64 | 
  65 | 
  66 | 
  67 | // create the intentional failure test
  68 | test('practice debugging a failed assertion', async ({ page }) => {
  69 |   await page.goto('https://playwright.dev/');
  70 | 
  71 |   // Intentionally incorrect expectation for practice.
  72 |   await expect(page).toHaveTitle(/Playwright/);
  73 | });
  74 | 
  75 | // test for the other website title
  76 | test('verify the Freecomers website title', async ({ page }) => {
> 77 |   await page.goto('https://freecomers.com/');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  78 | 
  79 |   await expect(page).toHaveTitle(/Freecomers/);
  80 | });
```