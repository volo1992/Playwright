import { Page, expect } from '@playwright/test';

export class LoginPage {

    constructor(private page: Page){}

    async open(){

        await this.page.goto('/');
    }

    async login(username: string,password: string){

        await this.page.locator('#user-name').fill(username);

        await this.page.locator('#password').fill(password);

        await this.page.locator('#login-button').click();
    }

    async verifyLogin(){

        await expect(this.page).toHaveURL(/inventory/);
    }

    async verifyLoginFailure(){

        await expect(this.page.locator('[data-test="error"]')).toBeVisible();
    }

}