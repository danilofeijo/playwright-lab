import { test, expect } from '@playwright/test'
import * as utils from '../utils/utils'
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

  test.describe('as Admin user', { tag: ['@adminUser'] }, () => {
    test.beforeEach(async () => {
      const randomName = utils.generateFullName()

      USER = {
        nome: randomName,
        email: utils.generateEmail(randomName),
        password: utils.generatePassword(),
        administrador: 'true',
      }

      await signupPage.apiCreateUser(USER)
      await loginPage.visitPage()
    })

    test('Should log in with valid credentials', async () => {
      // Arrange
      const loginCredentials: { email: string; password: string } = {
        email: USER.email,
        password: USER.password,
      }

      // Act
      await loginPage.fieldEmail.fill(loginCredentials.email)
      await loginPage.fieldPassword.fill(loginCredentials.password)
      await loginPage.buttonEntrar.click()

      // Assert
      await expect(homePage.headerAdmin).toContainText(USER.nome)
    })

    test('Should not log in with wrong credentials', async () => {
      // TODO - Develop test scenario
      // Arrange
      // Act
      // Assert
    })
  })

  test.describe('as Common user', { tag: ['@commonUser'] }, () => {
    // TODO - List tests to develop
  })
})
