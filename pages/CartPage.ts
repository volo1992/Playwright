import { expect, Page } from '@playwright/test';

export class CartPage{

    constructor(private page: Page){}

    async verifyOneItemExists(count: number){

        await expect(
            this.page.locator('.cart_item')
        ).toHaveCount(count);
    }

    async checkout(){

        await this.page.locator('#checkout').click();
    }

}