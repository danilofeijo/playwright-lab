import { type Locator, type Page, expect } from '@playwright/test'
import { GlobalPage } from '../pages/global.page'

export class LoginPage extends GlobalPage {
  // Variables
  readonly urlPath: string
  readonly fieldEmail: Locator
  readonly fieldPassword: Locator
  readonly buttonEntrar: Locator
  
  // Constructor
  constructor(page: Page) {
    super(page)
    this.urlPath = '/login'
    this.fieldEmail = page.getByTestId('email')
    this.fieldPassword = page.getByTestId('senha')
    this.buttonEntrar = page.getByTestId('entrar')
  }

  // Methods
  async visitPage() {
    this.page.goto(this.urlPath)

    expect(this.fieldEmail).toBeVisible()
    expect(this.fieldPassword).toBeVisible()
    expect(this.buttonLogout).toBeVisible()
  }
}

export default LoginPage
