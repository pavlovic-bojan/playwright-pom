import {Page, Locator, expect} from '@playwright/test'

class LoginPage{
    page: Page
    emailInput: Locator
    passwordInput: Locator
    loginButton: Locator
    rememberMe: Locator
    passwordHelpLink: Locator

    constructor(page: Page){
        this.page = page
        this.emailInput = page.locator('#email')
        this.passwordInput = page.locator('#password')
        this.loginButton = page.locator('#kc-login')
        this.rememberMe = page.locator('#rememberMe')
        this.passwordHelpLink = page.locator('#kc-form-buttons > span > a')
    }

    async navigate(){
        await this.page.goto('/')
    }

    async fillUsername() {
        const username = process.env.LOGIN_USER_NAME!
        await this.emailInput.type(username, { delay: 10 })
    }

    async fillPassword() {
        const password = process.env.LOGIN_PASSWORD!
        await this.passwordInput.type(password, { delay: 10 })
    }

    async clickLoginButton() {
        await this.loginButton.click({ force: true })
    }

    async checkPageTitle(expectedTitle: string) {
        await expect(this.page).toHaveTitle(expectedTitle)
    }

    async login() {
        await this.navigate()
        await this.fillUsername()
        await this.fillPassword()
        await this.clickLoginButton()
    }
}

export default LoginPage