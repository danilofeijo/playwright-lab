import { type Locator, type Page } from '@playwright/test'

export class HomePage {
  // Variables
  readonly page: Page
  readonly pageTitle: RegExp
  readonly getStartedButton: Locator
  readonly headerInstallation: Locator

  readonly menuNode: Locator

  // Constructor
  constructor(page: Page) {
    this.page = page
    this.pageTitle = /Playwright/
    this.getStartedButton = page.getByRole('link', { name: 'Get started' })
    this.headerInstallation = page.getByRole('heading', { name: 'Installation' })

    this.menuNode = page.getByRole('button', { name: 'Node.js' })
  }

  // Methods
  async clickGetStarted() {
    await this.getStartedButton.click()
  }
}

export default HomePage
