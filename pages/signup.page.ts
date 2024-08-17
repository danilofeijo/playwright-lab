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
  async apiCreateUser(userData: { nome: string; email: string; password: string; administrador: string }) {
    const apiContext = await request.newContext()
    const response = await apiContext.post(
      'https://serverest.dev/usuarios',
      { data: userData }
    )

    expect(response.ok()).toBeTruthy()
    const responseBody = await response.json()
    expect(responseBody.message).toBe('Cadastro realizado com sucesso')

    return userData
  }
}

export default SignupPage
