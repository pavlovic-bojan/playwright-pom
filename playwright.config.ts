import { defineConfig, devices } from '@playwright/test'
import dotenv from 'dotenv'
import path from 'path'

const envFilePath = process.env.ENV
  ? `./env/.env.${process.env.ENV}`
  : './env/.env.test'
dotenv.config({ path: envFilePath })

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.BASE_URL,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    // Desktop Devices
    // { name: 'Chromium Browser', use: { ...devices['Desktop Chrome'] } },
    // { name: 'FireFox', use: { ...devices['Desktop Firefox'] } },
    // { name: 'WebKit', use: { ...devices['Desktop Safari'] } },
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
    // iOS Devices
    // { name: 'iPhone 12', use: { ...devices['iPhone 12'] } },
    // { name: 'iPhone 12 Pro', use: { ...devices['iPhone 12 Pro'] } },
    // { name: 'iPhone 12 Pro Max', use: { ...devices['iPhone 12 Pro Max'] } },
    // { name: 'iPhone 13', use: { ...devices['iPhone 13'] } },
    // { name: 'iPhone 13 Pro', use: { ...devices['iPhone 13 Pro'] } },
    // { name: 'iPhone 13 Pro Max', use: { ...devices['iPhone 13 Pro Max'] } },
    // { name: 'iPhone 14', use: { ...devices['iPhone 14'] } },
    // { name: 'iPhone 14 Pro', use: { ...devices['iPhone 14 Pro'] } },
    // { name: 'iPhone 14 Pro Max', use: { ...devices['iPhone 14 Pro Max'] } },
    // {
    //   name: 'iPhone 15',
    //   use: { ...devices['iPhone 13 Pro'] } /* Closest profile */,
    // },
    // {
    //   name: 'iPhone SE (2nd generation)',
    //   use: { ...devices['iPhone SE (2nd generation)'] },
    // },
    // { name: 'iPad Pro (11-inch)', use: { ...devices['iPad Pro (11-inch)'] } },
    // {
    //   name: 'iPad Pro (12.9-inch)',
    //   use: { ...devices['iPad Pro (12.9-inch)'] },
    // },
    // Android Devices
    // { name: 'Pixel 4', use: { ...devices['Pixel 4'] } },
    // { name: 'Pixel 5', use: { ...devices['Pixel 5'] } },
    // { name: 'Pixel 6', use: { ...devices['Pixel 6'] } },
    // { name: 'Pixel 6 Pro', use: { ...devices['Pixel 6 Pro'] } },
    // { name: 'Pixel 7', use: { ...devices['Pixel 7'] } },
    // { name: 'Pixel 7 Pro', use: { ...devices['Pixel 7 Pro'] } },
    // { name: 'Pixel 8', use: { ...devices['Pixel 8'] } },
    // { name: 'Pixel 8 Pro', use: { ...devices['Pixel 8 Pro'] } },
    // { name: 'Galaxy S5', use: { ...devices['Galaxy S5'] } },
    // { name: 'Galaxy S20', use: { ...devices['Galaxy S20'] } },
    // { name: 'Galaxy S21', use: { ...devices['Galaxy S21'] } },
    // { name: 'Galaxy S21 Ultra', use: { ...devices['Galaxy S21 Ultra'] } },
    // { name: 'Galaxy Note 20', use: { ...devices['Galaxy Note 20'] } },
    // { name: 'Galaxy Fold', use: { ...devices['Galaxy Fold'] } },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
})
