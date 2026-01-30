// tests/login.spec.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('invalid login shows error message', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('/');
  await loginPage.login('wronguser', 'wrongpass');

  await expect(
    page.locator('#errorMsg')
  ).toHaveText('Invalid username or password');
});
