import { type Locator, type Page, } from '@playwright/test';

export class GlobalPage {
  // Variables
  readonly page: Page
  readonly navbar: Locator
  readonly buttonLogout: Locator
  readonly menuHome: Locator
  readonly menuCadastrarUsuarios: Locator
  readonly menuListarUsuarios: Locator
  readonly menuCadastrarProdutos: Locator
  readonly menuListarProdutos: Locator
  readonly menuRelatorios: Locator
  readonly menuListarCompras: Locator
  readonly menuCarrinho: Locator

  // Constructor
  constructor(page: Page) {
    this.page = page
    this.navbar = page.locator('id=navbarTogglerDemo01')
    this.buttonLogout = page.getByTestId('logout')
    this.menuHome = page.getByTestId('home')
    this.menuCadastrarUsuarios = page.getByTestId('cadastrar-usuarios')
    this.menuListarUsuarios = page.getByTestId('listar-usuarios')
    this.menuCadastrarProdutos = page.getByTestId('cadastrar-produtos')
    this.menuListarProdutos = page.getByTestId('listar-produtos')
    this.menuRelatorios = page.getByTestId('link-relatorios')
    this.menuListarCompras = page.getByTestId('lista-de-compras')
    this.menuCarrinho = page.getByTestId('carrinho')
  }

  // Methods
}

export default GlobalPage
