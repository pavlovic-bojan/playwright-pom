import {Page, Locator, expect} from '@playwright/test'

class AgGridComponent{
    page: Page
    rows: Locator
    comments: Locator

    constructor(page: Page){
        this.page = page
        this.rows = page.locator('.ag-row-odd > div').first()
        this.comments = page.getByLabel('Context Menu').getByText('Comments')
    }
    async rightClickOnRow() {
        if (!this.rows.isVisible) {
            throw new Error('No rows found in the grid.')
        }
        await this.rows.click({button: 'right'})
    }

    async clickOnComments() {
        await this.comments.waitFor()
        await this.comments.click({ force: true })
    }

}

export default AgGridComponent