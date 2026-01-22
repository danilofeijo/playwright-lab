import envUrl from './helpers/environment'
import { defineConfig, devices } from '@playwright/test'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './e2e',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI (2) and anyother envs (0) */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  // reporter: [['html', { open: 'always' }]], //always, never and on-failure (default).
  // reporter: [['html', { outputFolder: 'my-report' }]], // report is written into the playwright-report folder in the current working directory. override it using the PLAYWRIGHT_HTML_REPORT
  reporter: 'list', // dot / line / html are other options
  /**
    reporter: [
      ['list'],
      ['json', {  outputFile: 'test-results.json' }]
    ],
  */
  /**
   * custom reports: https://playwright.dev/docs/test-reporters#custom-reporters
   */

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: envUrl.dev.home,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    // viewport: { width: 1280, height: 720 },
    // video: 'on-first-retry',
    // headless: false,
    // ignoreHTTPSErrors: true,
  },

  // timeout: 30000, //https://playwright.dev/docs/test-timeouts
  /**
   * Maximum time expect() should wait for the condition to be met.
   * For example in `await expect(locator).toHaveText();`
  */
  expect: { timeout: 6000, },

  /* Configure projects for environments (not major browsers yet) */
  projects: [
    {
      name: 'local-env',
      use: { baseURL: envUrl.local.home, },
    },
    {
      name: 'dev-env',
      use: { baseURL: envUrl.dev.home, },
    },
    {
      name: 'qa-env',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: envUrl.qa.home,
        channel: 'chrome'
      },
    },

    // Example only
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
    // },

    {
      name: 'examples-chrome',
      testDir: './tests-examples',
      use: {
        baseURL: envUrl.example.home,
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'examples-all-browsers',
      testDir: './tests-examples',
      use: {
        baseURL: envUrl.example.home,
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'examples-all-browsers',
      testDir: './tests-examples',
      use: {
        baseURL: envUrl.example.home,
        ...devices['Desktop Safari'],
      },
    },

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
    //   use: { ...devices['iPhone 12'] },
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
});
