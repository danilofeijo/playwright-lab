import { defineConfig, devices } from '@playwright/test'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import * as dotenv from 'dotenv'
import * as path from 'path'
const ENV = process.env.ENV ?? 'dev'

const envFile = `.env.${ENV}`
dotenv.config({ path: path.resolve(__dirname, 'helpers', 'envs', envFile) })

console.log(`[playwright.config] ENV=${ENV}`)
console.log(`[playwright.config] BASE_URL_FRONT=${process.env.BASE_URL_FRONT}`)
console.log(`[playwright.config] BASE_URL_API=${process.env.BASE_URL_API}`)

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true, // Run tests in files in parallel.
  forbidOnly: !!process.env.CI, // Fail the build on CI if you accidentally left test.only in the source code.
  retries: process.env.CI ? 2 : 0, // Retry on CI (2) and anyother envs (0).
  workers: process.env.CI ? 1 : undefined, // Opt out of parallel tests on CI.
  reporter: 'list', // Reporter output. Other options are: dot, line, html

  /**
   * Reporter examples
   * (See https://playwright.dev/docs/test-reporters)
   *
   * reporter: [['html', { open: 'always' }]],
   * Other options are: always, never and on-failure (default).
   *
   * reporter: [['html', { outputFolder: 'my-report' }]],
   * Report is written into the playwright-report folder in the current working directory.
   * Override it using the PLAYWRIGHT_HTML_REPORT
   *
   * reporter: [
   *   ['list'],
   *   ['json', {  outputFile: 'test-results.json' }]
   * ],
   *
   * More about custom reports:
   * https://playwright.dev/docs/test-reporters#custom-reporters
   */

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: process.env.BASE_URL_FRONT,
    headless: process.env.HEADLESS === 'true',
    trace: 'on-first-retry', // Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer

    // viewport: { width: 1280, height: 720 },
    // video: 'on-first-retry',
    // ignoreHTTPSErrors: true,
  },

  /**
   * Maximum time expect() should wait for the condition to be met.
   * For example in `await expect(locator).toHaveText();`
   * See https://playwright.dev/docs/test-timeouts
   */
  expect: { timeout: 6000 },

  projects: [
    {
      name: ENV,
      use: { ...devices['Desktop Chrome'] },
    },

    // TODO Configure multi-browser
    /**
     * Currently disabled to assure multi-env setting
     */

    // {
    //   name: 'local-env',
    //   use: { baseURL: envUrl.local.home, }, // Old env config
    // },
    // {
    //   name: 'dev-env',
    //   use: { baseURL: envUrl.dev.home, },
    // },
    // {
    //   name: 'qa-env',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     baseURL: envUrl.qa.home,
    //     channel: 'chrome'
    //   },
    // },

    // CI Example
    // {
    //   name: 'ci',
    //   use: {
    //     baseURL: process.env.CI
    //       ? baseEnvUrl.ci.prefix + process.env.GITHUB_REF_NAME + baseEnvUrl.ci.suffix //https://dev-myapp-chapter-2.mydomain.com
    //       : baseEnvUrl.staging.home,
    //   },
    /**
     * GitHub variables: https://docs.github.com/en/actions/learn-github-actions/variables
     * GitLab variables: https://docs.gitlab.com/ee/ci/variables/predefined_variables.html#predefined-variables-reference
     */

    // PW Example
    // {
    //   name: 'examples-chrome',
    //   testDir: './tests-examples',
    //   use: { ...devices['Desktop Chrome'], },
    // },

    /* 
    <<<<<<<<<< Default Examples for Future Reference >>>>>>>>>>
    */

    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop Chrome'] },
    // },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 15'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
})
