import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { USERS } from '../utils/users';

test.describe('SauceDemo sanity tests', () => {
    test('Standard user can log in and view the inventory', async ({ page }) => {
        const login = new LoginPage(page);
        await login.open();
        await login.login(USERS.STANDARD, USERS.PASSWORD);
        await login.verifyLogin();

        const inventory = new InventoryPage(page);
        await inventory.verifyProductsVisible();
    });

    test('Standard user can add a product to the cart', async ({ page }) => {
        const login = new LoginPage(page);
        await login.open();
        await login.login(USERS.STANDARD, USERS.PASSWORD);

        const inventory = new InventoryPage(page);
        await inventory.addBackpack();
        await inventory.openCart();

        const cart = new CartPage(page);
        await cart.verifyOneItemExists(1);
    });
    test('Locked user should fail to login', async ({ page }) => {
        const login = new LoginPage(page);
        await login.open();
        await login.login(USERS.LOCKED, USERS.PASSWORD);

        await login.verifyLoginFailure();
    });
});
