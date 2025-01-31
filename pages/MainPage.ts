import { type Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { InventoryItemFragment } from '../fragments/InventoryItemFragment';

export class MainPage extends BasePage {
  private _inventoryItemFragment: InventoryItemFragment;
  public readonly inventoryContainer = this.getLocatorById('inventory_container');

  constructor(readonly page: Page) {
    super(page);
    this._inventoryItemFragment = new InventoryItemFragment(page);
  }

  public getInventoryItemFragment(): InventoryItemFragment {
    return this._inventoryItemFragment;
  }
}
