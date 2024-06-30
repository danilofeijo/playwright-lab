import { type Locator, type Page } from '@playwright/test'
import { GlobalPage } from '../pages/global.page'

export class LoginPage extends GlobalPage {
  // Variables
  readonly page: Page
  readonly urlPath: string
  
  // Constructor
  constructor(page: Page) {
    super(page)
    this.urlPath = '/login'
  }

  // Methods
}

export default LoginPage
