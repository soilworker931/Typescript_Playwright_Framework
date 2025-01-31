import test, { type Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { User, UserCredenials } from '../testData/UserCredentials';

export class LoginPage extends BasePage {
  public readonly username = this.getLocatorById('user-name');
  public readonly password = this.getLocatorById('password');
  public readonly loginButton = this.getLocatorById('login-button');
  public readonly errorMessage = this.getLocatorByDataTest('error');
  public readonly closeErrorMessageButon = this.getLocatorByDataTest('error-button');

  constructor(readonly page: Page) {
    super(page);
  }

  public async openPage(): Promise<void> {
    await this.page.goto('');
  }

  public async login(userCredentials?: UserCredenials): Promise<void> {
    const { username, password } = userCredentials
      ? userCredentials
      : { username: User.STANDARD_USER, password: process.env.USER_PASSWORD };
    await test.step(`Login with user: ${username} and password: ${username}`, async () => {
      await this.username.fill(username);
      await this.password.fill(password);
      await this.loginButton.click();
    });
  }

  public async openPageAndLogin(userCredentials?: UserCredenials): Promise<void> {
    await this.openPage();
    await this.login(userCredentials);
  }
}
