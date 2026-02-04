import { type Locator, type Page, type APIRequestContext, expect, request } from '@playwright/test'
import { GlobalPage } from '../pages/global.page'

interface UserData {
  nome: string
  email: string
  password: string
  administrador?: string | 'true'
}

export class SignupPage extends GlobalPage {
  // Variables
  readonly urlPath: string
  readonly fieldName: Locator
  readonly fieldEmail: Locator
  readonly fieldPassword: Locator
  readonly checkboxAdmin: Locator
  readonly buttonSignup: Locator

  // Constructor
  constructor(page: Page) {
    super(page)
    this.urlPath = '/cadastrarusuarios'
    this.fieldName = page.getByTestId('nome')
    this.fieldEmail = page.getByTestId('email')
    this.fieldPassword = page.getByTestId('password')
    this.checkboxAdmin = page.getByTestId('checkbox')
    this.buttonSignup = page.locator('data-testid=cadastrar') // A generic option to get a locator
  }

  // Methods

  /**
   * 
   * @param {object} user - User data do be signed up
   */
  async signup(user: UserData ) {
    await this.fieldName.fill(user.nome)
    await this.fieldEmail.fill(user.email)
    await this.fieldPassword.fill(user.password)

    user.administrador === 'true' && await this.checkboxAdmin.check()

    await this.buttonSignup.click()
  }
}

export default SignupPage
