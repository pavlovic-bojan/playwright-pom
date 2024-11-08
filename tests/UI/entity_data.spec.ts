import { test, expect } from '@playwright/test'
import EntityData from '../..//pages/entity_data.page'
import LoginPage from '../../pages/login.page'
import AgGridComponent from '../../pages/component/ag_grid.component'
import CommentsComponent from '../../pages/component/comments.component'

test.describe('EntityDataStore Coment', () => {
    let entityData: EntityData
    let loginPage: LoginPage
    let agGridComponent: AgGridComponent
    let commentsComponent: CommentsComponent
    const expectedTitle = process.env.TITLE

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page)
        agGridComponent = new AgGridComponent(page)
        commentsComponent = new CommentsComponent(page)
        entityData = new EntityData(page)
        await loginPage.login()
        await entityData.pageBodyIsVisible()
        await page.waitForTimeout(10000)
        await expect(page).toHaveTitle(expectedTitle!)
        await entityData.populateListOfTables()
    })

    test('Create Comment & Click on Cancel Button', async () => {
        await agGridComponent.rightClickOnRow()
        await agGridComponent.clickOnComments()
        await commentsComponent.drawerCommentsIsVisible()
        await commentsComponent.textBoxInitialization()
        await commentsComponent.fillCommentsTextArea()
        await commentsComponent.clickCancelButton()
    })

    test('Create Comment & Click on Save Button', async () => {
        await agGridComponent.rightClickOnRow()
        await agGridComponent.clickOnComments()
        await commentsComponent.drawerCommentsIsVisible()
        await commentsComponent.textBoxInitialization()
        await commentsComponent.fillCommentsTextArea()
        await commentsComponent.clickSaveButton()
    })

    test('Edit Comment & Click on Save Button', async () => {
        await agGridComponent.rightClickOnRow()
        await agGridComponent.clickOnComments()
        await commentsComponent.drawerCommentsIsVisible()
        await commentsComponent.clickEdit()
        await commentsComponent.clickButtonEdit()
        await commentsComponent.fillCommentsTextArea()
        await commentsComponent.clickSaveButton()
    })
})