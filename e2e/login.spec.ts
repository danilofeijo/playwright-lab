import { test, expect } from '@playwright/test'
import { Utils } from '../utils/utils'
import { LoginPage } from '../pages/login.page'

let loginPage: LoginPage
let USER: { nome: string; email: string; password: string; administrador: string }

const createUserViaApi = async (userData: { nome: string; email: string; password: string; administrador: string }) => {
  const apiContext = await request.newContext()
  const response = await apiContext.post(
    'https://serverest.dev/usuarios',
    { data: userData }
  )

  expect(response.ok()).toBeTruthy()
  const responseBody = await response.json()
  expect(responseBody.message).toBe('Cadastro realizado com sucesso')

  console.log(responseBody)

  return userData
}

test.describe('On login page', () => {
  test.describe('as Admin user', () => {
    test.beforeEach(async ({ page }) => {
      loginPage = new LoginPage(page)
      // signupPage = new SignupPage(page)
      // homePage = new HomePage(page)

      const randomName = Utils.setFullName()

      USER = {
        nome: randomName,
        email: Utils.setEmail(randomName),
        password: Utils.setPassword(),
        administrador: 'true'
      }
  
      createUserViaApi(USER)
      await page.goto(loginPage.urlPath)
    })

    test('Should log in with valid credentials', async ({ page }) => {
      // TODO - Develop test scenario
      // Arrange
      const loginCredentials: { email: string, password: string} = {
        email: USER.email,
        password: USER.password
      }

      // Act
      await loginPage.emailField.fill(loginCredentials.email)
      await loginPage.passwordField.fill(loginCredentials.password)
      await loginPage.entrarButton.click()

      // Assert
      await expect(page.getByRole('heading', { name: 'Bem Vindo' })).toContainText(USER.nome)
    })

    test('Should not log in with wrong credentials', async ({ page }) => {
      // TODO - Develop test scenario
      // Arrange
      // Act
      // Assert
    })
  })

  test.describe('as Common user', () => {})
})
