import {test as base } from '@playwright/test'
import { GlobalPage } from '../pages/global.page'
import { SignupPage } from '../pages/signup.page'
import { LoginPage } from '../pages/login.page'
import { HomePage } from '../pages/home.page'

type PagesFixtures = {
  globalPage: GlobalPage
  signupPage: SignupPage
  loginPage: LoginPage
  homePage: HomePage
}

export const pageTest = base.extend<PagesFixtures>({
  globalPage: async ({ page }, use) => {
    const globalPage = new GlobalPage(page)
    await use(globalPage)
  },

  signupPage: async ({ page }, use) => {
    const signupPage = new SignupPage(page)
    await use(signupPage)
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page)
    await use(loginPage)
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page)
    await use(homePage)
  },
})
