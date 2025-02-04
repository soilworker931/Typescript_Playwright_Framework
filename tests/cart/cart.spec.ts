import { TestTag } from '../../common/TestTag';
import { expect, test } from '../../pageFixtures';
import { getItemInfo, InventoryItem } from '../../testData/InventoryItems';

test.describe('Inventory Items', { tag: TestTag.CART }, () => {
  test.describe.configure({ mode: 'parallel' });
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.openPageAndLogin();
  });

  test('Inventory items can be added and removed from the cart', async ({ mainPage, cartPage }) => {
    const inventoryItemsInTest = [InventoryItem.SAUCE_LABS_BACKPACK, InventoryItem.SAUCE_LABS_BIKE_LIGHT];

    const inventoryItemFragment = mainPage.getInventoryItemFragment();
    const headerFragment = mainPage.getHeaderFragment();

    await test.step('Check that cart counter badge is hidden', async () => {
      await expect(headerFragment.cartBadgeCounter).toBeHidden();
    });
    await test.step('Add Inventory items and check badge', async () => {
      await inventoryItemFragment.addInventoryItemsToCart(inventoryItemsInTest);
      await expect(headerFragment.cartBadgeCounter).toHaveText(String(inventoryItemsInTest.length));
      for (const item of inventoryItemsInTest) {
        await expect(inventoryItemFragment.getInventoryItemAddToCardButton(item)).toBeHidden();
        await expect(inventoryItemFragment.getRemoveInventoryItemFromCartButton(item)).toBeVisible();
      }
    });
    await test.step('Check added Inventory Items in the cart page', async () => {
      await headerFragment.cartButton.click();
      for (const item of inventoryItemsInTest) {
        await cartPage.verifyInventoryItemCard(getItemInfo(item));
      }
    });
    await test.step('Return to Main Page, remove Inventory items and check badge', async () => {
      await cartPage.continueShoppingButton.click();
      for (const item of inventoryItemsInTest) {
        await inventoryItemFragment.getRemoveInventoryItemFromCartButton(item).click();
      }
      await expect(headerFragment.cartBadgeCounter).toBeHidden();
    });
    await test.step('Check removed Inventory Items in the cart page', async () => {
      await headerFragment.cartButton.click();
      for (const item of inventoryItemsInTest) {
        await expect(cartPage.getInventoryItemCard(item)).toBeHidden();
      }
    });
  });
});
