import { type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  public readonly loginButton = this.getLocatorContainingClass("NavButton");

  constructor(readonly page: Page) {
    super(page, "");
  }
}