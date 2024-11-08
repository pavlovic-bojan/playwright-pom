import { Page, Locator } from '@playwright/test'

class EntityData {
    page: Page
    entityDataPageBody: Locator
    entityDataItems: Locator
    listOfTables: { text: string; href: string }[]

    constructor(page: Page) {
        this.page = page
        this.entityDataPageBody = page.locator('.desktop')
        this.entityDataItems = page.locator('#leftDrawer > div > div:nth-child(1) > a')
        this.listOfTables = []
    }

    async pageBodyIsVisible(){
        await this.entityDataPageBody.isVisible()
    }

    async populateListOfTables() {
        await this.entityDataItems.first().waitFor()

        const itemCount = await this.entityDataItems.count()

        for (let i = 0; i < itemCount; i++) {
            const element = this.entityDataItems.nth(i)
            const text = await element.textContent() || ''
            const href = await element.getAttribute('href') || ''

            if (href.includes('/admin/user')) {
                continue;
            }

            this.listOfTables.push({ text: text.trim(), href })
        }
        console.log(this.listOfTables)        
    }      
}

export default EntityData
