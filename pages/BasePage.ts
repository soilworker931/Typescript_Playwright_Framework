import { Locator, Page } from '@playwright/test';

export class BasePage {
  constructor(readonly page: Page) {}

  public getLocator(locator: string): Locator {
    return this.page.locator(locator);
  }

  public getLocatorContainingClass(classPart: string): Locator {
    return this.page.locator(`//*[contains(@class,"${classPart}")]`);
  }

  public getLocatorById(id: string): Locator {
    return this.page.locator(`#${id}`);
  }

  public getLocatorByDataTest(dataTest: string): Locator {
    return this.page.locator(`//*[@data-test="${dataTest}"]`);
  }

  public getLocatorByText(text: string): Locator {
    return this.page.locator(`//*[text()="${text}"]`);
  }
}
