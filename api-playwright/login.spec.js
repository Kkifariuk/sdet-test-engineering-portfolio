const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../ui/pages/loginPage');

test('Login test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');

  await expect(page.locator('.flash.success')).toBeVisible();
});

