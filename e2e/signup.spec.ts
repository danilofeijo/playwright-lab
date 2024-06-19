import { test, expect } from '@playwright/test'
import { Utils } from '../utils/utils'
import { SignupPage } from '../pages/signup.page'
import { HomePage } from "../pages/home.page";

let USER: { nome: string; email: string; pass: string }
let signupPage: SignupPage
let homePage: HomePage

test.describe('On Signup page', () => {
  test.beforeEach(async ({page}) => {
    signupPage = new SignupPage(page)
    homePage = new HomePage(page)
    
    const userName = Utils.setFullName()

    USER = {
      nome: userName,
      email: Utils.setEmail(userName),
      pass: Utils.setPassword()
    };

    await page.goto('/cadastrarusuarios')
  });

  test('Should create a new admin user', async ({ page }) => {
    // Act
    await signupPage.fieldName.fill(USER.nome)
    await signupPage.fieldEmail.fill(USER.email)
    await signupPage.fieldPassword.fill(USER.pass)
    await signupPage.checkboxAdmin.click()
    await signupPage.buttonSignup.click()

    // Assert
    await expect(page).toHaveURL(homePage.urlHomeAdmin)

    await expect(homePage.headerAdmin).toBeVisible()
    await expect(homePage.headerAdmin).not.toBeHidden()
    await expect(homePage.headerAdmin).toContainText(USER.nome)

    // TODO - Develop assertions
    // await expect(menuCadastrarUsuarios).toHaveText('Cadastrar Usuários')
    // await expect(menuListarUsuarios).toHaveText('Listar Usuários')
    // await expect(menuCadastrarProdutos).toHaveText('Cadastrar Produtos')
    // await expect(menuListarProdutos).toHaveText('Listar Produtos')
    // await expect(menuRelatorios).toHaveText('Relatórios')
    // await expect(buttonLogout).toBeVisible()

    // await expect(menuListaCompras).not.toBeVisible() // or .toBeHidden()
    // await expect(menuCarrinho).not.toBeVisible()
  });

  test('Should create a common user',  async ({ page }) => {
    // Act
    await signupPage.fieldName.fill(USER.nome)
    await signupPage.fieldEmail.fill(USER.email)
    await signupPage.fieldPassword.fill(USER.pass)
    await signupPage.buttonSignup.click()

    // Assert
    await expect(page).toHaveURL(homePage.urlHomeCommon)
    await expect(page).not.toHaveURL(homePage.urlHomeAdmin)
    await expect(homePage.headerCommon).toBeVisible()
    await expect(homePage.headerCommon).toContainText('Serverest Store')

    // TODO - Develop assertions
    // await expect(menuListaCompras).toHaveText('Lista de Compras')
    // await expect(menuCarrinho).toHaveText('Carrinho')
    // await expect(buttonLogout).toBeVisible()
    // await expect(buttonLogout).toBeVisible()

    // await expect (menuCadastrarUsuarios).toBeHidden()
    // await expect (menuListarUsuarios).toBeHidden()
    // await expect (menuCadastrarProdutos).toBeHidden()
    // await expect (menuListarProdutos).toBeHidden()
    // await expect (menuRelatorios).toBeHidden()
  });
})
