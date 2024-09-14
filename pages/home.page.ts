import { type Locator, type Page } from '@playwright/test'
import { GlobalPage } from '../pages/global.page'

export class HomePage extends GlobalPage {
  // Variables
  readonly urlPathAdmin: string
  readonly headerAdmin: Locator

  readonly urlPathCommon: string
  readonly headerCommon: Locator

  readonly buttonSignup: Locator

  // Constructor
  constructor(page: Page) {
    super(page)
    this.urlPathAdmin = '/admin/home'
    this.headerAdmin = page.getByRole('heading', { name: /Bem Vindo/ })

    this.urlPathCommon = '/home'
    this.headerCommon = page.getByRole('heading', { name: /Serverest Store/ })
  }

  // Methods
}

export default HomePage
