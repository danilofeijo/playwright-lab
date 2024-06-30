import { test, expect } from '@playwright/test'
import { Utils } from '../utils/utils'
import { LoginPage } from '../pages/login.page'

let USER: { nome: string; email: string; password: string; administrador: string }
let loginPage: LoginPage

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
  
      await page.goto(loginPage.urlPath)
    })

    test('Should log in with Admin user credentials', async ({ page }) => {
      // TODO - Develop test scenario
      // Arrange
      // Act
      // Assert
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
