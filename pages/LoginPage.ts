import { type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  public readonly loginForm = this.getLocatorById("login");
  public readonly loginButton = this.getLocatorByText("Log in");

  constructor(readonly page: Page) {
    super(page, "login");
  }

}