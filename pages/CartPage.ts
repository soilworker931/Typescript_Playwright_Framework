import test, { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { ItemInfo } from '../testData/InventoryItems';

export class CartPage extends BasePage {
  public readonly cartContainer = this.getLocatorById('cart_contents_container');
  public readonly continueShoppingButton = this.getLocatorById('continue-shopping');
  public readonly inventoryItemCard = this.getLocatorByDataTest('inventory-item');
  public readonly inventoryItemName = this.getLocatorByDataTest('inventory-item-name');
  public readonly inventoryItemDescription = this.getLocatorByDataTest('inventory-item-desc');
  public readonly inventoryItemPrice = this.getLocatorByDataTest('inventory-item-price');

  constructor(readonly page: Page) {
    super(page);
  }

  public getInventoryItemCard(itemName: string): Locator {
    return this.inventoryItemCard.filter({ has: this.inventoryItemName.filter({ hasText: itemName }) });
  }

  public getInventoryItemName(itemName: string): Locator {
    return this.getInventoryItemCard(itemName).locator(this.inventoryItemName);
  }

  public getInventoryItemDescription(itemName: string): Locator {
    return this.getInventoryItemCard(itemName).locator(this.inventoryItemDescription);
  }

  public getInventoryItemPrice(itemName: string): Locator {
    return this.getInventoryItemCard(itemName).locator(this.inventoryItemPrice);
  }

  public async verifyInventoryItemCard({ name, description, price }: ItemInfo): Promise<void> {
    await expect.soft(this.getInventoryItemName(name)).toHaveText(name);
    await expect.soft(this.getInventoryItemDescription(name)).toHaveText(description);
    await expect.soft(this.getInventoryItemPrice(name)).toHaveText(`$${price}`);
    expect(test.info().errors).toHaveLength(0);
  }
}
