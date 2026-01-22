import { test, expect } from '@playwright/test'
import * as utils from '../utils/utils'
import { LoginPage } from '../pages/login.page'
import { HomePage } from '../pages/home.page'
import { ServeRestAPI } from '../helpers/api/serverest-client'

let loginPage: LoginPage
let homePage: HomePage
let USER: { nome: string; email: string; password: string; administrador: string }
let serveRestAPI: ServeRestAPI

test.describe('On login page', () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)
    serveRestAPI = new ServeRestAPI()
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

      await serveRestAPI.createUser(USER)
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
