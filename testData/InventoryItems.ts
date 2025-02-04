export type ItemInfo = {
  name: string;
  description: string;
  price: number;
};

export enum InventoryItem {
  SAUCE_LABS_BACKPACK = 'Sauce Labs Backpack',
  SAUCE_LABS_BIKE_LIGHT = 'Sauce Labs Bike Light',
  SAUCE_LABS_BOLT_T_SHIRT = 'Sauce Labs Bolt T-Shirt',
  SAUCE_LABS_FLEECE_JACKET = 'Sauce Labs Fleece Jacket',
  SAUCE_LABS_ONESIE = 'Sauce Labs Onesie',
  SAUCE_LABS_T_SHIRT_RED = 'Test.allTheThings() T-Shirt (Red)',
}

export function getItemInfo(item: InventoryItem): ItemInfo {
  let itemInfo: ItemInfo;
  switch (item) {
    case InventoryItem.SAUCE_LABS_BACKPACK:
      itemInfo = {
        name: InventoryItem.SAUCE_LABS_BACKPACK,
        description:
          'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
        price: 29.99,
      };
      break;
    case InventoryItem.SAUCE_LABS_BIKE_LIGHT:
      itemInfo = {
        name: InventoryItem.SAUCE_LABS_BIKE_LIGHT,
        description:
          "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
        price: 9.99,
      };
      break;
    case InventoryItem.SAUCE_LABS_BOLT_T_SHIRT:
      itemInfo = {
        name: InventoryItem.SAUCE_LABS_BOLT_T_SHIRT,
        description:
          'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.',
        price: 15.99,
      };
      break;
    case InventoryItem.SAUCE_LABS_FLEECE_JACKET:
      itemInfo = {
        name: InventoryItem.SAUCE_LABS_FLEECE_JACKET,
        description:
          "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.",
        price: 49.99,
      };
      break;
    case InventoryItem.SAUCE_LABS_ONESIE:
      itemInfo = {
        name: InventoryItem.SAUCE_LABS_ONESIE,
        description:
          "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.",
        price: 7.99,
      };
      break;
    case InventoryItem.SAUCE_LABS_T_SHIRT_RED:
      itemInfo = {
        name: InventoryItem.SAUCE_LABS_T_SHIRT_RED,
        description:
          'This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.',
        price: 15.99,
      };
      break;
    default:
      throw new Error('Selected item does is not added to default items list');
  }
  return itemInfo;
}
