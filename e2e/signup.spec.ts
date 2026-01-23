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

    await expect(homePage.headerAdmin).toBeVisible()
    await expect(homePage.headerAdmin).not.toBeHidden()
    await expect(homePage.headerAdmin).toContainText(signupData.nome)

    await expect(homePage.menuCadastrarUsuarios).toHaveText('Cadastrar Usuários')
    await expect(homePage.menuListarUsuarios).toHaveText('Listar Usuários')
    await expect(homePage.menuCadastrarProdutos).toHaveText('Cadastrar Produtos')
    await expect(homePage.menuListarProdutos).toHaveText('Listar Produtos')
    await expect(homePage.menuRelatorios).toHaveText('Relatórios')
    await expect(homePage.buttonLogout).toBeVisible()

    await expect(homePage.menuListarCompras).not.toBeVisible() // or .toBeHidden()
    await expect(homePage.menuCarrinho).toBeHidden() // not.toBeVisible()
  })

  test('Should create a common user', { tag: ['@commonUser'] }, async ({ signupPage, signupData, page, homePage }) => {
    // Act
    await signupPage.fieldName.fill(signupData.nome)
    await signupPage.fieldEmail.fill(signupData.email)
    await signupPage.fieldPassword.fill(signupData.password)
    await signupPage.buttonSignup.click()

    // Assert
    await expect(page).toHaveURL(homePage.urlPathCommon)
    await expect(page).not.toHaveURL(homePage.urlPathAdmin)
    await expect(homePage.headerCommon).toBeVisible()
    await expect(homePage.headerCommon).toContainText('Serverest Store')

    await expect(homePage.menuListarCompras).toHaveText('Lista de Compras')
    await expect(homePage.menuCarrinho).toHaveText('Carrinho')
    await expect(homePage.buttonLogout).toBeVisible()

    await expect(homePage.menuCadastrarUsuarios).toBeHidden()
    await expect(homePage.menuListarUsuarios).toBeHidden()
    await expect(homePage.menuCadastrarProdutos).toBeHidden()
    await expect(homePage.menuListarProdutos).toBeHidden()
    await expect(homePage.menuRelatorios).toBeHidden()
  })
})
