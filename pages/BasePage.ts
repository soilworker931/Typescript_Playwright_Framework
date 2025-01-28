import test, { Locator, Page } from "@playwright/test";

export class BasePage {
    constructor(readonly page: Page, readonly urlPath: string) { }

    public async openPage(): Promise<void> {
        const url = `${process.env.BASE_URL}/${this.urlPath}`;
        await test.step(`Navigate to: ${url}`, async () => {
            await this.page.goto(url);
        })
    }

    public getLocatorContainingClass(classPart: string): Locator {
        return this.page.locator(`//*[contains(@class,"${classPart}")]`);
    }

    public getLocatorById(id: string): Locator {
        return this.page.locator(`#${id}`);
    }

    public getLocatorByText(text: string): Locator {
        return this.page.locator(`//*[text()=${text}]`);
    }
}