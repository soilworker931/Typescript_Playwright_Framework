import { type Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { InventoryItemFragment } from '../fragments/InventoryItemFragment';
import { HeaderFragment } from '../fragments/HeaderFragment';

export class MainPage extends BasePage {
  private _inventoryItemFragment: InventoryItemFragment;
  private _headerFragment: HeaderFragment;
  public readonly inventoryContainer = this.getLocatorById('inventory_container');

  constructor(readonly page: Page) {
    super(page);
    this._headerFragment = new HeaderFragment(page);
    this._inventoryItemFragment = new InventoryItemFragment(page);
  }

  public getInventoryItemFragment(): InventoryItemFragment {
    return this._inventoryItemFragment;
  }

  public getHeaderFragment(): HeaderFragment {
    return this._headerFragment;
  }
}
