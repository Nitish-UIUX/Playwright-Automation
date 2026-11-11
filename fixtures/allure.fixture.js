
const base = require('@playwright/test');
const { allure } = require('allure-playwright');

const test = base.test.extend({
  page: async ({ page }, use, testInfo) => {
    await page.context().tracing.start({
      screenshots: true,
      snapshots: true,
      sources: true,
    });

    await use(page);

    const tracePath = testInfo.outputPath('trace.zip');

    await page.context().tracing.stop({
      path: tracePath,
    });

    if (require('fs').existsSync(tracePath)) {
      await allure.attachment(
        'Playwright Trace',
        require('fs').readFileSync(tracePath),
        'application/zip'
      );
    }
  },
});

module.exports = {
  test,
  expect: base.expect,
};
