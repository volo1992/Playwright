import { expect, Page } from '@playwright/test';

export class CheckoutCompletePage{

    constructor(private page: Page){}

    async verifyOrderCompleted(){

        await expect(
            this.page.locator('.complete-header')
        ).toHaveText('Thank you for your order!');
    }

}