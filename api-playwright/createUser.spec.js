const { test, expect } = require('@playwright/test');
const { UserClient } = require('../../api/clients/userClient');

test('Create user via API', async () => {
  const client = new UserClient();
  await client.init();

  const response = await client.createUser('Karina', 'SDET');

  expect(response.name).toBe('Karina');
  expect(response.job).toBe('SDET');
  expect(response.id).toBeTruthy();

  await client.dispose();
});

