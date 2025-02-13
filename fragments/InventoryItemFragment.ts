import test, { expect, Locator, Page } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { ItemInfo } from '../testData/InventoryItems';

export class InventoryItemFragment extends BasePage {
  public readonly addInventoryItemToCartButton = this.getLocatorContainingClass('btn_primary');
  public readonly removeInventoryItemFromCartButton = this.getLocatorContainingClass('btn_secondary');
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

  public getInventoryItemAddToCardButton(itemName: string): Locator {
    return this.getInventoryItemCard(itemName).locator(this.addInventoryItemToCartButton);
  }

  public getRemoveInventoryItemFromCartButton(itemName: string): Locator {
    return this.getInventoryItemCard(itemName).locator(this.removeInventoryItemFromCartButton);
  }

  public async verifyInventoryItemCard({ name, description, price }: ItemInfo): Promise<void> {
    await expect.soft(this.getInventoryItemName(name)).toHaveText(name);
    await expect.soft(this.getInventoryItemDescription(name)).toHaveText(description);
    await expect.soft(this.getInventoryItemPrice(name)).toHaveText(`$${price}`);
    expect(test.info().errors).toHaveLength(0);
  }

  public async addInventoryItemsToCart(itemNames: string | string[]): Promise<void> {
    if (!Array.isArray(itemNames)) {
      itemNames = [itemNames];
    }
    for (const itemName of itemNames) {
      await this.getInventoryItemAddToCardButton(itemName).click();
    }
  }
}
