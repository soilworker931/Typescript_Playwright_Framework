import { expect, test } from "../../pageFixtures";

test.describe("Login Page", () => {
    test("Login Page navigation", async ({ mainPage, loginPage }) => {
        await test.step("User is able to navigate to Login Page", async () => {
            await mainPage.openPage();
            await mainPage.loginButton.click();
            await expect(loginPage.page).toHaveURL(`${process.env.BASE_URL}/login`);
            await expect(loginPage.loginForm).toBeVisible();
        })
    })
})