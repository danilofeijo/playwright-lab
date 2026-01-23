import { mergeTests, expect } from '@playwright/test'
import { pageTest } from '../fixtures/pages.fixtures'
import { signupTest } from '../fixtures/signup.fixture'
import { api } from '../api/serverest-client'

const test = mergeTests(pageTest, signupTest)

test.describe('On login page', () => {
  test.beforeEach(async () => {
  })

  test.describe('as Admin user', { tag: ['@adminUser'] }, () => {
    test.beforeEach(async ({ signupData, createdUserData, loginPage }) => {
      const res = await api.createUser(signupData)
      createdUserData.id = res.userId

      await loginPage.visitPage()
    })

    test.afterEach(async ({ createdUserData }) => {
      await api.deleteUser(createdUserData.id)
    })

    test('Should log in with valid credentials', async ({ loginPage, signupData, homePage }) => {
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
