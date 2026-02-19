import { mergeTests, expect } from '@playwright/test'
import { pageTest } from '../fixtures/pages.fixtures'
import { loginTest } from '../fixtures/login.fixture'
import { serverestMocks } from './mocks'

const test = mergeTests(pageTest, loginTest)

test.describe('On login page', () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visitPage()
  })

  test.describe('as Admin user', { tag: ['@smoke'] }, () => {
    test('Should log in with valid credentials', async ({ page, loginPage, adminUser, homePage }) => {
      // Act
      await loginPage.loginUser(adminUser.email, adminUser.password)

      // Assert
      await expect(homePage.headerAdmin).toContainText(adminUser.nome)
      await expect(page).toHaveURL(homePage.urlPathAdmin)
    })

    test.skip('Should not log in with wrong credentials', async () => {
      // TODO - Develop test scenario
      // Arrange
      // Act
      // Assert
    })
  })

  test.describe('as Common user', () => {
    test('Should not log in after Internal Server Error', async ({ page, loginPage, adminUser, homePage }) => {
      // Arrange
      await page.route(`${process.env.BASE_URL_API}/login`, serverestMocks.error500)

      const userData = {
        ...adminUser,
        administrador: 'false',
      }

      // Act
      await loginPage.loginUser(userData.email, userData.password)

      const response = await page.waitForResponse(
        (response) => response.status() === 500 && response.request().method() === 'POST'
      )

      // Assert
      await expect(homePage.headerAdmin).toHaveCount(0)
      expect(response.status()).toBe(500)
      expect(response.statusText()).toBe('Internal Server Error')
      await expect(page).toHaveURL(loginPage.urlPath)
    })

    // TODO - List more tests to develop
  })
})
