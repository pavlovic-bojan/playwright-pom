import {test, expect} from '@playwright/test'
import LoginPage from '../../pages/login.page'

test.describe('Login', () => {
    let loginPage: LoginPage
    const expectedTitle = 'Sign in to test'

    test.beforeEach(async ({ page }) => {
      loginPage = new LoginPage(page)
      await loginPage.navigate()
    })

    test('Open Login Page and verify  title', async ({ page }) => {
      await expect(page).toHaveTitle('Sign in to test')
    })

    test('Login with proper login data', async () => {
      await loginPage.checkPageTitle(expectedTitle)
      await loginPage.login()
    })
})