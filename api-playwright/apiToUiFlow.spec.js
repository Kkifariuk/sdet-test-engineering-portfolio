const { test, expect } = require('@playwright/test');
const { UserClient } = require('../../api/clients/userClient');
const { LoginPage } = require('../../ui/pages/loginPage');

test('API to UI flow', async ({ page }) => {
  const client = new UserClient();
  await client.init();

  const apiUser = await client.createUser('Karina', 'SDET');

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');

  await expect(page.locator('.flash.success')).toBeVisible();

  await client.dispose();
});


