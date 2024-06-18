import { type Locator, type Page, } from '@playwright/test';

export class SignupPage {
  // Variables
  readonly page: Page
  readonly fieldName: Locator
  readonly fieldEmail: Locator
  readonly fieldPassword: Locator
  readonly checkboxAdmin: Locator
  readonly buttonSignup: Locator

  // Constructor
  constructor(page: Page) {
    this.page = page
    this.fieldName = page.getByTestId('nome')
    this.fieldEmail = page.getByTestId('email')
    this.fieldPassword = page.getByTestId('password')
    this.checkboxAdmin = page.getByTestId('checkbox')
    this.buttonSignup = page.locator('data-testid=cadastrar')
  }

  // Methods
}

export default SignupPage
