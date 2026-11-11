// class ApiClient {
//   constructor(request) {
//     this.request = request;
//     this.baseURL = 'https://jsonplaceholder.typicode.com';
//   }

//   async get(endpoint, params = {}) {
//     return await this.request.get(`${this.baseURL}${endpoint}`, {
//       params,
//     });
//   }

//   async post(endpoint, data) {
//     return await this.request.post(`${this.baseURL}${endpoint}`, {
//       data,
//     });
//   }

//   async put(endpoint, data) {
//     return await this.request.put(`${this.baseURL}${endpoint}`, {
//       data,
//     });
//   }

//   async patch(endpoint, data) {
//     return await this.request.patch(`${this.baseURL}${endpoint}`, {
//       data,
//     });
//   }

//   async delete(endpoint) {
//     return await this.request.delete(`${this.baseURL}${endpoint}`);
//   }
// }

// module.exports = { ApiClient };

// What are we doing?
// - constructor(request) receives Playwright's request fixture.
// - baseURL stores the common API URL.
// - Each method handles one HTTP operation.
// - Tests can reuse these methods instead of repeating request configuration.



class ApiClient {
  constructor(request, baseURL, defaultHeaders = {}) {
    this.request = request;
    this.baseURL = baseURL;
    this.defaultHeaders = defaultHeaders;
  }

  async get(endpoint, options = {}) {
    return this.request.get(`${this.baseURL}${endpoint}`, {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
    });
  }

  async post(endpoint, data, options = {}) {
    return this.request.post(`${this.baseURL}${endpoint}`, {
      ...options,
      data,
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
    });
  }
}

module.exports = { ApiClient };