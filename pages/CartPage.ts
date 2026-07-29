import { expect, Page } from '@playwright/test';

export class CartPage{

    constructor(private page: Page){}

    async verifyItemExists(){

        await expect(
            this.page.locator('.cart_item')
        ).toHaveCount(1);
    }

    async checkout(){

        await this.page.locator('#checkout').click();
    }

}