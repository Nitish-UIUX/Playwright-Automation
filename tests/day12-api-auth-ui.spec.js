
const { test, expect } = require('@playwright/test');

test('Authenticate through API and access browser application', async ({
  request,
  page,
}) => {

  // Step 1: Login through API
  const loginResponse = await request.post(
    'https://dummyjson.com/auth/login',
    {
      data: {
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30,
      },
    }
  );

  expect(loginResponse.status()).toBe(200);

  const loginData = await loginResponse.json();

  const accessToken = loginData.accessToken;

  expect(accessToken).toBeTruthy();

  console.log('API authentication successful');

  // Step 2: Open browser application
  await page.goto('https://dummyjson.com');

  // Step 3: Store token in browser localStorage
  await page.evaluate((token) => {
    localStorage.setItem('accessToken', token);
  }, accessToken);

  // Step 4: Verify token was stored
  const storedToken = await page.evaluate(() => {
    return localStorage.getItem('accessToken');
  });

  expect(storedToken).toBe(accessToken);

  console.log('Access token stored in browser');

});



// ----------------------- Understand important concepts -----------------------
// request.post()	------> Authenticate through API
// response.json()	------ > Read access token
// page.goto()	----------> Open browser application
// page.evaluate()	----------> Execute JavaScript in browser
// localStorage.setItem() ----------> 	Store token
// localStorage.getItem() ----------> 	Read stored token



