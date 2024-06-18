import { test, expect } from '@playwright/test'
import { Utils } from '../utils/utils'
import { SignupPage } from '../pages/signup.page'

let USER: { nome: string; email: string; pass: string }
let signupPage: SignupPage

test.describe('On Signup page', () => {
  test.beforeEach(async ({page}) => {
    signupPage = new SignupPage(page)
    
    const userName = Utils.setFullName()

    USER = {
      nome: userName,
      email: Utils.setEmail(userName),
      pass: Utils.setPassword()
    };

    await page.goto('/cadastrarusuarios')
  });

  test.only('Should create a new admin user', async ({ page }) => {
    // Act
    await signupPage.fieldName.fill(USER.nome)
    await signupPage.fieldEmail.fill(USER.email)
    await signupPage.fieldPassword.fill(USER.pass)
    await signupPage.checkboxAdmin.click()
    await signupPage.buttonSignup.click()

    // Assert
    await expect(page).toHaveURL('/admin/home')
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('h1')).not.toBeHidden()
    await expect(page.locator('h1')).toContainText(USER.nome)

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
    await page.getByTestId('nome').fill(USER.nome)
    await page.getByTestId('email').fill(USER.email)
    await page.getByTestId('password').fill(USER.pass)
    await page.locator('data-testid=cadastrar').click()

    // Assert
    await expect(page).toHaveURL('/home')
    await expect(page).not.toHaveURL('/admin/home')
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('h1')).toContainText('Serverest Store')

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
