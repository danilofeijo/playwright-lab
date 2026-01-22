import { mergeTests, expect } from '@playwright/test'

import { LoginPage } from '../pages/login.page'
import { HomePage } from '../pages/home.page'
import { ServeRestAPI } from '../helpers/api/serverest-client'
import { signupTest } from '../fixtures/signup.fixture'

const test = mergeTests(signupTest)

let loginPage: LoginPage
let homePage: HomePage
let serveRestAPI: ServeRestAPI

test.describe('On login page', () => {
  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)
    serveRestAPI = new ServeRestAPI()
  })

  test.describe('as Admin user', { tag: ['@adminUser'] }, () => {
    test.beforeEach(async ({ signupData }) => {
      await serveRestAPI.createUser(signupData)
      await loginPage.visitPage()
    })

    test('Should log in with valid credentials', async ({ signupData }) => {
      // Act
      await loginPage.fieldEmail.fill(signupData.email)
      await loginPage.fieldPassword.fill(signupData.password)
      await loginPage.buttonEntrar.click()

      // Assert
      await expect(homePage.headerAdmin).toContainText(signupData.nome)
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
