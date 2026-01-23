import { mergeTests, expect } from '@playwright/test'

import { pageTest } from '../fixtures/pages.fixtures'
import { signupTest } from '../fixtures/signup.fixture'

const test = mergeTests(pageTest, signupTest)

test.describe('On Signup page', () => {
  test.beforeEach(async ({ page, signupPage }) => {
    await page.goto(signupPage.urlPath)
  })

  test('Should create an admin user', { tag: ['@adminUser'] }, async ({ signupPage, signupData, page, homePage }) => {
    // Act
    await signupPage.fieldName.fill(signupData.nome)
    await signupPage.fieldEmail.fill(signupData.email)
    await signupPage.fieldPassword.fill(signupData.password)
    await signupPage.checkboxAdmin.click()
    await signupPage.buttonSignup.click()

    // Assert
    await expect(page).toHaveURL(homePage.urlPathAdmin)
    await expect(homePage.headerAdmin).toBeVisible() // or .not.toBeHidden()
    await expect(homePage.headerAdmin).toContainText(signupData.nome)
    await expect(homePage.menuCadastrarUsuarios).toHaveText('Cadastrar Usuários')
    await expect(homePage.menuCarrinho).toBeHidden() // or .not.toBeVisible()
  })

  test('Should create a common user', { tag: ['@commonUser'] }, async ({ signupPage, signupData, page, homePage }) => {
    // Act
    await signupPage.fieldName.fill(signupData.nome)
    await signupPage.fieldEmail.fill(signupData.email)
    await signupPage.fieldPassword.fill(signupData.password)
    await signupPage.buttonSignup.click()

    // Assert
    await expect(page).toHaveURL(homePage.urlPathCommon)
    await expect(homePage.headerCommon).toBeVisible()
    await expect(homePage.headerCommon).toContainText('Serverest Store')
    await expect(homePage.menuCarrinho).toHaveText('Carrinho')
    await expect(homePage.menuCadastrarUsuarios).toBeHidden()
  })
})
