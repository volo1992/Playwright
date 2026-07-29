import { expect, Page } from '@playwright/test';

export class InventoryPage{

    constructor(private page: Page){}

    async addBackpack(){

        await this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }

    async openCart(){

        await this.page.locator('.shopping_cart_link').click();
    }

    async verifyProductsVisible(){

        await expect(
            this.page.locator('.inventory_item')
        ).toHaveCount(6);
    }

}