import { mergeTests, expect } from '@playwright/test'

import { pageTest } from '../fixtures/pages.fixtures'
import { signupTest } from '../fixtures/signup.fixture'

const test = mergeTests(pageTest, signupTest)

test.describe('On Signup page', () => {
  test('Should create an admin user', { tag: ['@smoke'] }, async ({ signupPage, signupData, page, homePage }) => {
    // Act
    await signupPage.signup(signupData)

    // Assert
    await expect(page).toHaveURL(homePage.urlPathAdmin)
    await expect(homePage.headerAdmin).toBeVisible() // or .not.toBeHidden()
    await expect(homePage.headerAdmin).toContainText(signupData.nome)
    await expect(homePage.menuCadastrarUsuarios).toHaveText('Cadastrar Usuários')
    await expect(homePage.menuCarrinho).toBeHidden() // or .not.toBeVisible()
  })

  test('Should create a common user', { tag: ['@smoke'] }, async ({ signupPage, signupData, page, homePage }) => {
    // Arrange
    signupData.administrador = 'false'

    // Act
    await signupPage.signup(signupData)

    // Assert
    await expect(page).toHaveURL(homePage.urlPathCommon)
    await expect(homePage.headerCommon).toBeVisible()
    await expect(homePage.headerCommon).toContainText('Serverest Store')
    await expect(homePage.menuCarrinho).toHaveText('Carrinho')
    await expect(homePage.menuCadastrarUsuarios).toBeHidden()
  })
})
