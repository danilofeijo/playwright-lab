import { mergeTests, expect } from '@playwright/test'
import { pageTest } from '../fixtures/pages.fixtures'
import { loginTest } from '../fixtures/login.fixture'

const test = mergeTests(
  pageTest,
  loginTest
)

test.describe('On login page', () => {
  test.beforeEach(async ({ loginPage}) => {
    await loginPage.visitPage()
  })

  test.describe('as Admin user', { tag: ['@smoke'] }, () => {
    test('Should log in with valid credentials', async ({ loginPage, adminUser, homePage }) => {
      // Act
      await loginPage.loginUser(adminUser.email, adminUser.password)

      // Assert
      await expect(homePage.headerAdmin).toContainText(adminUser.nome)
    })

    test('Should not log in with wrong credentials', async () => {
      // TODO - Develop test scenario
      // Arrange
      // Act
      // Assert
    })
  })

  test.describe('as Common user', () => {
    // TODO - List tests to develop
  })
})
