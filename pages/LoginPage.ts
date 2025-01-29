import { Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { format } from 'util';

export enum LoginField {
  USERNAME = "Username",
  PASSWORD = "Password"
}

export class LoginPage extends BasePage {
  private readonly _fieldPlaceholder = "//*[contains(@class,'theme__hint') and text()='%s']";
  public readonly loginForm = this.getLocatorById("login");
  public readonly loginField = this.getLocatorContainingClass("Login__field");
  public readonly fieldInput = this.getLocatorContainingClass("theme__inputElement");
  public readonly loginButton = this.loginForm.getByText("Log in", { exact: true });
  public readonly cancelButton = this.loginForm.getByText("Cancel", { exact: true });

  constructor(readonly page: Page) {
    super(page, "login");
  }

  public getFieldPlaceholder(field: LoginField): Locator {
    return this.getLocator(format(this._fieldPlaceholder, field));
  }

  public getFieldInput(field: LoginField): Locator {
    return this.loginField.filter({ has: this.getFieldPlaceholder(field) }).locator(this.fieldInput);
  }

  public async fillInCredentials(login: string, password: string): Promise<void> {
    await this.getFieldInput(LoginField.USERNAME).fill(login);
    await this.getFieldInput(LoginField.PASSWORD).fill(password);
  }

  public async login(login: string, password: string): Promise<void> {
    await this.fillInCredentials(login, password);
    await this.loginButton.click();
  }
}