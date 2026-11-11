const { expect } = require('@playwright/test');

async function expectStatus(response, expectedStatus = 200) {
  expect(response.status()).toBe(expectedStatus);
}

async function expectJsonResponse(response) {
  const contentType = response.headers()['content-type'];

  expect(contentType).toContain('application/json');
}

async function expectResponseTime(response, maxTime = 3000) {
  const timing = response.request().timing();

  expect(timing.responseEnd).toBeLessThanOrEqual(maxTime);
}

async function expectJsonField(response, field, expectedValue) {
  const body = await response.json();

  expect(body[field]).toBe(expectedValue);
}

module.exports = {
  expectStatus,
  expectJsonResponse,
  expectResponseTime,
  expectJsonField,
};