import { expect, test } from '../../pageFixtures';
import { getUserCredentials, User } from '../../testData/UserCredentials';
import { LoginPageWordings } from '../../wordings/loginPageWordings';

test.describe('Login Page', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.openPage();
  });

  const usersLoginTest: User[] = [User.STANDARD_USER, User.PROBLEM_USER, User.PERFORMANCE_GLITCH_USER, User.ERROR_USER, User.VISUAL_USER];

  for (const user of usersLoginTest) {
    test(`Successful Login with ${user} user`, async ({ loginPage, mainPage }) => {
      await test.step('User is able to Login', async () => {
        await loginPage.login(getUserCredentials(user));
        await expect(mainPage.page).toHaveURL('inventory.html');
        await expect(mainPage.inventoryContainer).toBeVisible();
      });
    });
  }

  test('Login with locked user', async ({ loginPage, mainPage }) => {
    await test.step('Login with locked user', async () => {
      await loginPage.login(getUserCredentials(User.LOCKED_OUT_USER));
      await expect(mainPage.inventoryContainer).toBeHidden();
      await expect(loginPage.errorMessage).toHaveText(LoginPageWordings.USER_LOCKED_OUT);
    });
  });
});
