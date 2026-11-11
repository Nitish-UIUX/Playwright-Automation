// In the day 7 we are focus on the "Api" testing with Playwright

// what we are learning :- 
// 1. API testing fundamentals
// 2. GET and POST requests
// 3. PUT, PATCH and DELETE requests
// 4. API response validation
// 5. API authentication
// 6. API testing mini project


// What is API testing?
// ans :- API testing involves testing the application programming interfaces (APIs) directly to ensure they meet functionality, reliability, performance, and security expectations.

// Why API testing is important?
// ans :- API testing is important because it helps identify issues early in the development process, ensures the correctness of the API, and validates that the API meets the required standards and business logic.


// Difference between API testing and UI testing
// Tests the user interface	---> Tests backend endpoints
// Uses browser interactions	---> Sends HTTP requests
// Uses page fixture	---> Uses request fixture
// Checks buttons, forms and text	---> Checks status codes and response data
// Usually slower	---> Usually faster    


// HTTP methods 
// 1. GET - Retrieves data from the server
// 2. POST - Sends data to the server to create a resource
// 3. PUT - Updates an existing resource on the server
// 4. PATCH - Partially updates an existing resource on the server
// 5. DELETE - Deletes a resource from the server




// How Playwright performs Api testing
// Playwright provides a "request" fixture that allows sending HTTP requests to backend endpoints.
// You can perform GET, POST, PUT, PATCH, and DELETE requests using this fixture.
// The response can be validated by checking status codes, response headers, and response body.
// This enables end-to-end API testing within the Playwright framework.

// example : - 
import { test, expect } from '@playwright/test';

test('API test example', async ({ request }) => {

    const response = await request.get(
        'https://jsonplaceholder.typicode.com/posts/1'
    );

    console.log('Status:', response.status());

    const responseBody = await response.json();

    console.log(responseBody);

    await expect(response).toBeOK();

});

// request.get() - Sends a GET request to the specified URL and returns the response.
// response.status() - Returns the HTTP status code of the response.
// response.json() - Parses the response body as JSON and returns it.
// expect(response).toBeOK() - Asserts that the response status code is in the range 200-299.



// in hour 2 , we learnned how to retrieve data using GET and create using POST resources using APIs.

// Understanding the HTTP methods

// GET	---> Retrieve data	---> Fetch user details
// POST	---> Create new data	---> Create a user
// PUT	---> Replace existing data	---> Update all user details
// PATCH	---> Partially update data	---> Update only email
// DELETE	---> Delete existing data	---> Delete a user


// PUT vs PATCH
// PUT	---> Replaces the entire resource	---> Update all user details
// PATCH	---> Partially updates the resource	---> Update only email

// {
//     "id": 1,
//     "name": "John",
//     "email": "john@gmail.com",
//     "city": "Delhi"
// }


// PUT : Send a complete replacement representation of the resource.
// Example:
// PUT /users/1
// {
//     "id": 1,
//     "name": "John",
//     "email": "john@gmail.com",
//     "city": "Delhi"
// }

// PATCH : Send only the fields that need to be updated.
// Example:
// PATCH /users/1
// {
//     "email": "john.new@gmail.com"
// }



// Create the test file




// -----------------------------------API Response Validation --------------------------------
// In the previous sessions, we learned GET, POST, PUT, PATCH and DELETE requests.
// Now we will learn how to validate API responses properly, just checking the HTTP status code is not enough.
// For example, an API can return status 200, but the response may contain incorrect data. We need to validate the response body, headers, data types and response time.

// What shoudl we validate in an API response?
// Status code ---> 200, 201, 400, 401, etc.
// Response Body ---> Expected Json data.
// Data Types ---> String , number , boolean , array.
// Response headers ---> Content-type , cache headers
// Response time ---> How long the API takes.



// API Authentication Using Playwright

// we will learn how to test protected APIs that require authentication.

// Until now, we have accessed public APIs such as JSONPlaceholder. Real-world applications usually protect their APIs using authentication tokens.

// Since you have already worked with JWT authentication in your Laravel and Node.js projects, these concepts will also be useful when testing your own backend APIs.

// What is API authentication?

// API authentication verifies the identity of a user or application before allowing access to protected endpoints.
// Common Authentication methods include:
// - Basic Authentication ---> Username and Password
// - Bearer Token  -----> Access token sent in reques headers
// - JWT ---> JSON Web Token 
// - Api Key ---> Secret key used to identiry an applicaion 
// - OAuth ---> Token-based delegated authorization


// How to send a Bearer Token Using Playwright 

// headers: {
//     Authorization: `Bearer ${token}`
// }


// Practical Exercise - Test Api Authentication
// For this excercise , we will use a mock API that supports authentication:
// https://dummyjson.com



// important concepts

// Access Token -----> Credential used to access protected APIs
// Bearer Token	-----> Token sent through Authorization header
// JWT	-----> A commonly used token format
// Authorization Header	-----> Carries authentication credentials
// Custom Fixture	----->  Reuses authentication setup across tests
// Protected API	-----> Endpoint that requires authentication