test('Complete Checkout', async ({page})=>{

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

    await cart.checkout();

    const checkout = new CheckoutPage(page);

    await checkout.fillInformation();

    await checkout.finish();

    const complete = new CheckoutCompletePage(page);

    await complete.verifyOrderCompleted();

});