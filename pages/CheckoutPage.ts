import { Page } from '@playwright/test';

export class CheckoutPage{

    constructor(private page: Page){}

    async fillInformation(){

        await this.page.fill('#first-name','John');

        await this.page.fill('#last-name','Doe');

        await this.page.fill('#postal-code','10000');

        await this.page.click('#continue');
    }

    async finish(){

        await this.page.click('#finish');
    }

}