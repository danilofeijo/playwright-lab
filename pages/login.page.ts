import { type Locator, type Page } from '@playwright/test'
import { GlobalPage } from '../pages/global.page'

export class LoginPage extends GlobalPage {
  // Variables
  readonly urlPath: string
  readonly emailField: Locator
  readonly passwordField: Locator
  readonly entrarButton: Locator
  
  // Constructor
  constructor(page: Page) {
    super(page)
    this.urlPath = '/login'
    this.emailField = page.getByTestId('email')
    this.passwordField = page.getByTestId('senha')
    this.entrarButton = page.getByTestId('entrar')
  }

  // Methods
}

export default LoginPage
