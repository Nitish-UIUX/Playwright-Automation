// Network Interception & API Mocking
// Learn how to monitor browser network requests , intercept API calls, mock responses, and test application behavior writhout depending entirely on the backend
// what we are learn in the day 8 session
// Understanding browser network requests
// Monitoring requests and responses
// Intercepting requests using page.route()
// Mocking API responses using route.fulfill()
// Modifying and blocking network requests
// Mini project – Build an API-mocked UI test suite


// -----------------------Understanding browser network requests -----------------------
// when a user opens a web application , the browser sends requests to the server to retrieve data.
// 1. User opnes the application.
// 2. Browser sends a GET request to / api/products.
// 3. Server returns product data in JSON.
// 4. Browser displays the products.

// page.on('request')	--->  Detects outgoing browser requests
// page.on('response')	---> Detects incoming browser responses
// request.method()	---> vGets HTTP method, such as GET or POST
// request.url()	---> vGets the requested URL
// response.status()	--->  Gets HTTP status code