import { TestTag } from '../../common/TestTag';
import { expect, test } from '../../pageFixtures';
import { getItemInfo, InventoryItem } from '../../testData/InventoryItems';

const inventoryItems = [
  InventoryItem.SAUCE_LABS_BACKPACK,
  InventoryItem.SAUCE_LABS_BIKE_LIGHT,
  InventoryItem.SAUCE_LABS_BOLT_T_SHIRT,
  InventoryItem.SAUCE_LABS_FLEECE_JACKET,
  InventoryItem.SAUCE_LABS_ONESIE,
  InventoryItem.SAUCE_LABS_T_SHIRT_RED,
];

test.describe('Inventory Items', { tag: TestTag.LOGIN }, () => {
  test.describe.configure({ mode: 'parallel' });
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.openPageAndLogin();
  });

  test('All expected inventory items are shown in the Inventory', async ({ mainPage }) => {
    const inventoryItemFragment = mainPage.getInventoryItemFragment();

    const expectedNumberOfItems = Object.keys(InventoryItem).length;

    await test.step('Verify inventory items', async () => {
      await expect(inventoryItemFragment.inventoryItemCard).toHaveCount(expectedNumberOfItems);
      for (const item of inventoryItems) {
        await inventoryItemFragment.verifyInventoryItemCard(getItemInfo(item));
      }
    });
  });
});
