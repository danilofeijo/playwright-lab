import { test, expect } from '@playwright/test'
import * as utils from '../utils/utils'
import { SignupPage } from '../pages/signup.page'
import { HomePage } from '../pages/home.page'

let USER: { nome: string; email: string; pass: string }
let signupPage: SignupPage
let homePage: HomePage

test.describe('On Signup page', () => {
  test.beforeEach(async ({ page, request }) => {
    signupPage = new SignupPage(page, request)
    homePage = new HomePage(page)

    const userName = utils.generateFullName()

    USER = {
      nome: userName,
      email: utils.generateEmail(userName),
      pass: utils.generatePassword(),
    }

    await page.goto(signupPage.urlPath)
  })

  test('Should create an admin user', async ({ page }) => {
    // Act
    await signupPage.fieldName.fill(USER.nome)
    await signupPage.fieldEmail.fill(USER.email)
    await signupPage.fieldPassword.fill(USER.pass)
    await signupPage.checkboxAdmin.click()
    await signupPage.buttonSignup.click()

    // Assert
    await expect(page).toHaveURL(homePage.urlPathAdmin)

    await expect(homePage.headerAdmin).toBeVisible()
    await expect(homePage.headerAdmin).not.toBeHidden()
    await expect(homePage.headerAdmin).toContainText(USER.nome)

    await expect(homePage.menuCadastrarUsuarios).toHaveText('Cadastrar Usuários')
    await expect(homePage.menuListarUsuarios).toHaveText('Listar Usuários')
    await expect(homePage.menuCadastrarProdutos).toHaveText('Cadastrar Produtos')
    await expect(homePage.menuListarProdutos).toHaveText('Listar Produtos')
    await expect(homePage.menuRelatorios).toHaveText('Relatórios')
    await expect(homePage.buttonLogout).toBeVisible()

    await expect(homePage.menuListarCompras).not.toBeVisible() // or .toBeHidden()
    await expect(homePage.menuCarrinho).toBeHidden() // not.toBeVisible()
  })

  test('Should create a common user', async ({ page }) => {
    // Act
    await signupPage.fieldName.fill(USER.nome)
    await signupPage.fieldEmail.fill(USER.email)
    await signupPage.fieldPassword.fill(USER.pass)
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
