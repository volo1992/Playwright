test('Inventory Loads', async ({page})=>{

    const login = new LoginPage(page);

    await login.open();

    await login.login(
        USERS.STANDARD,
        USERS.PASSWORD
    );

    const inventory = new InventoryPage(page);

    await inventory.verifyProductsVisible();

});