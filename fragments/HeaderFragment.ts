import { Page } from '@playwright/test';
import { BasePage } from '../pages/BasePage';

export class HeaderFragment extends BasePage {
  public menuButton = this.getLocatorByDataTest('open-menu');
  public readonly cartButton = this.getLocatorById('shopping_cart_container');
  public readonly cartBadgeCounter = this.getLocatorByDataTest('shopping-cart-badge');

  constructor(public readonly page: Page) {
    super(page);
  }
}
