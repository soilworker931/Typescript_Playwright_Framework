import { type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  public readonly inventoryContainer = this.getLocatorById('inventory_container');

  constructor(readonly page: Page) {
    super(page, '');
  }
}
