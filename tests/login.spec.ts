import { test } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

import { USERS } from '../utils/users';

test('Standard User Login', async ({page})=>{

    const login = new LoginPage(page);

    await login.open();

    await login.login(USERS.STANDARD,USERS.PASSWORD);

    await login.verifyLogin();

});

test('Locked User Cannot Login', async ({page})=>{

    const login = new LoginPage(page);

    await login.open();

    await login.login(USERS.LOCKED,USERS.PASSWORD);

    await expect(
        page.locator('[data-test="error"]')
    ).toContainText('locked out');

});

test('Logout', async ({page})=>{

    const login = new LoginPage(page);

    await login.open();

    await login.login(
        USERS.STANDARD,
        USERS.PASSWORD
    );

    await page.locator('#react-burger-menu-btn').click();

    await page.locator('#logout_sidebar_link').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/');
});