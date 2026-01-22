import { type Locator, type Page, type APIRequestContext, expect, request } from '@playwright/test'
import { GlobalPage } from '../pages/global.page'

export class SignupPage extends GlobalPage {
  // Variables
  readonly request: APIRequestContext
  readonly urlPath: string
  readonly fieldName: Locator
  readonly fieldEmail: Locator
  readonly fieldPassword: Locator
  readonly checkboxAdmin: Locator
  readonly buttonSignup: Locator

  // Constructor
  constructor(page: Page, request: APIRequestContext) {
    super(page)
    this.request = request
    this.urlPath = '/cadastrarusuarios'
    this.fieldName = page.getByTestId('nome')
    this.fieldEmail = page.getByTestId('email')
    this.fieldPassword = page.getByTestId('password')
    this.checkboxAdmin = page.getByTestId('checkbox')
    this.buttonSignup = page.locator('data-testid=cadastrar') // A generic option to get a locator
  }

  // Methods
  // No Signup methods yet
}

export default SignupPage
