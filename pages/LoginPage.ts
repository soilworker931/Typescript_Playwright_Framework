import test, { type Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { UserCredenials } from '../testData/UserCredentials';

export class LoginPage extends BasePage {
  public readonly username = this.getLocatorById('user-name');
  public readonly password = this.getLocatorById('password');
  public readonly loginButton = this.getLocatorById('login-button');
  public readonly errorMessage = this.getLocatorByDataTest('error');
  public readonly closeErrorMessageButon = this.getLocatorByDataTest('error-button');

  constructor(readonly page: Page) {
    super(page, '');
  }

  public async login({ username, password }: UserCredenials): Promise<void> {
    await test.step(`Login with user: ${username} and password: ${username}`, async () => {
      await this.username.fill(username);
      await this.password.fill(password);
      await this.loginButton.click();
    });
  }
}
