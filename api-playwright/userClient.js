const { request } = require('@playwright/test');

class UserClient {
  async init() {
    this.requestContext = await request.newContext({
      baseURL: 'https://reqres.in/api'
    });
  }

  async createUser(name, job) {
    const response = await this.requestContext.post('/users', {
      data: { name, job }
    });

    return await response.json();
  }

  async dispose() {
    await this.requestContext.dispose();
  }
}

module.exports = { UserClient };

