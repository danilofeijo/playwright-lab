import { type Locator, type Page } from '@playwright/test'

export class HeaderPage {
  // Variables
  readonly page: Page
  readonly menuNode: Locator
  readonly submenuJava: Locator

  /**
   * Non related to HeaderPage. Better to be in another Page
   */
  readonly urlIntroJava: string
  readonly descriptionJava: string
  readonly headerInstallingPwJs: Locator

  // Constructor
  constructor(page: Page) {
    this.page = page
    this.menuNode = page.getByRole('button', { name: 'Node.js' })
    this.submenuJava = page.getByText('Java', { exact: true })
    this.urlIntroJava =  'https://playwright.dev/java/docs/intro'

    this.descriptionJava = `Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.`

    this.headerInstallingPwJs = page.getByText('Installing Playwright', { exact: true })
  }

  // Methods
  async hoverNodeMenu() {
    await this.menuNode.hover()
  }
}

export default HeaderPage
