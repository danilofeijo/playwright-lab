import { type Locator, type Page, } from '@playwright/test'
import { GlobalPage } from '../pages/global.page'

export class SignupPage extends GlobalPage {
  // Variables
  readonly page: Page
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
}

export default SignupPage
