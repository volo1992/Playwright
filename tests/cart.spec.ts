test('Add Product To Cart', async ({page})=>{

    const login = new LoginPage(page);

    await login.open();

    await login.login(
        USERS.STANDARD,
        USERS.PASSWORD
    );

    const inventory = new InventoryPage(page);

    await inventory.addBackpack();

    await inventory.openCart();

    const cart = new CartPage(page);

    await cart.verifyItemExists();

});