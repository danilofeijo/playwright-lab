import { test, expect, request } from '@playwright/test'
import { Utils } from '../utils/utils'
import { SignupPage } from '../pages/signup.page'
import { LoginPage } from '../pages/login.page'
import { HomePage } from '../pages/home.page'

let signupPage: SignupPage
let loginPage: LoginPage
let homePage: HomePage
let USER: { nome: string; email: string; password: string; administrador: string }

test.describe('On login page', () => {
  test.beforeEach(async ({ page, request }) => {
    signupPage = new SignupPage(page, request)
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)
  })

  test.describe('as Admin user', () => {
    test.beforeEach(async ({ page }) => {

      const randomName = Utils.setFullName()

      USER = {
        nome: randomName,
        email: Utils.setEmail(randomName),
        password: Utils.setPassword(),
        administrador: 'true'
      }

      await signupPage.apiCreateUser(USER)
      await page.goto(loginPage.urlPath)
    })

    test('Should log in with valid credentials', async () => {
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
      await expect(homePage.headerAdmin).toContainText(USER.nome)
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
