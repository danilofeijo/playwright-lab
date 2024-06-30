import { type Locator, type Page } from '@playwright/test';
import { GlobalPage } from '../pages/global.page'

export class HomePage extends GlobalPage {
  // Variables
  readonly page: Page
  readonly urlHomeAdmin: string
  readonly headerAdmin: Locator

  readonly urlHomeCommon: string
  readonly headerCommon: Locator

  readonly buttonSignup: Locator

  // Constructor
  constructor(page: Page) {
    super(page)
    this.urlHomeAdmin = '/admin/home'
    this.headerAdmin = page.getByRole('heading', { name: /Bem Vindo/})

    this.urlHomeCommon = '/home'
    this.headerCommon = page.getByRole('heading', { name: /Serverest Store/ })
  }

  // Methods
}

export default HomePage
