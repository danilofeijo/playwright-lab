import { type Locator, type Page } from '@playwright/test';

export class HomePage {
  // Variables
  readonly page: Page
  readonly urlHomeAdmin: string
  readonly headerAdmin: Locator

  readonly urlHomeCommon: string
  readonly headerCommon: Locator

  readonly buttonSignup: Locator

  // Constructor
  constructor(page: Page) {
    this.page = page

    this.urlHomeAdmin = '/admin/home'
    this.headerAdmin = page.getByRole('heading', { name: /Bem Vindo/})

    this.urlHomeCommon = '/home'
    this.headerCommon = page.getByRole('heading', { name: /Serverest Store/ })

    this.buttonSignup = page.locator('data-testid=cadastrar')
  }

  // Methods
}

export default HomePage
