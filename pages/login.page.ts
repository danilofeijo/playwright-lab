import { type Locator, type Page } from '@playwright/test'
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

  /**
   * Visit login page
   */
  async visitPage() {
    await this.page.goto(this.urlPath)
  }

  /**
   *
   * @param {string} [userEmail] - Login user e-mail
   * @param {string} userPass - Login user pass
   */
  async loginUser(userEmail: string, userPass: string) {
    await this.fieldEmail.fill(userEmail)
    await this.fieldPassword.fill(userPass)
    await this.buttonEntrar.click()
  }
}

export default LoginPage
