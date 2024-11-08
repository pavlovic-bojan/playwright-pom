import {Page, Locator, expect} from '@playwright/test'
import { faker } from '@faker-js/faker'

class CommentsComponent{
    page: Page
    drawerComments: Locator
    commentsTextBoxInitialization: Locator
    commentsTextArea: Locator
    commentsButtonSave: Locator
    commentsButtonCancel: Locator
    commentsEdit: Locator
    commentsButtonEdit: Locator

    constructor(page: Page){
        this.page = page
        this.drawerComments = page.locator("#rightDrawer")
        this.commentsTextBoxInitialization = page.locator("//div[contains(@class, 'text-body1') and contains(@class, 'text-grey-7') and text()='Add a comment']")
        this.commentsTextArea = page.locator(".q-field__native.q-placeholder")
        this.commentsButtonSave = page.getByRole('button', { name: 'Save' })
        this.commentsButtonCancel = page.getByRole('button', { name: 'Cancel' })
        this.commentsEdit = page.locator('div').filter({ hasText: /^Non Admin Non Admin10\/16\/2024 08:56 PM Bacon Pistachio Pie\(edited\)$/ }).getByRole('button')
        this.commentsButtonEdit = page.getByText('Edit', { exact: true })
    }

    async drawerCommentsIsVisible() {
        await expect(this.drawerComments).toBeVisible()
    }

    async textBoxInitialization(){
        await this.commentsTextBoxInitialization.click()
    }

    async fillCommentsTextArea() {
        const randomComments = faker.lorem.sentence()
        await this.commentsTextArea.type(randomComments, { delay: 10 })
    }

    async clickSaveButton() {
        await this.commentsButtonSave.click()
    }

    async clickCancelButton() {
        await this.commentsButtonCancel.click()
    }

    async clickEdit() {
        await this.commentsEdit.click()
    }

    async clickButtonEdit() {
        await this.commentsButtonEdit.click()
    }

}

export default CommentsComponent