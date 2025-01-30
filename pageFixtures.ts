import { test as base } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { MainPage } from './pages/MainPage';

type PageObjects = {
  loginPage: LoginPage;
  mainPage: MainPage;
};

export const test = base.extend<PageObjects>({
  mainPage: async ({ page }, use) => {
    const mainPage = new MainPage(page);
    await use(mainPage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';
