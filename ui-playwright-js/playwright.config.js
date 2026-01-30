// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,

  use: {
    browserName: 'chromium',
    baseURL: 'https://the-internet.herokuapp.com/login',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});
