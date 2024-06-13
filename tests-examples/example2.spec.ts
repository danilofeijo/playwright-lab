import { test, expect, type Page } from '@playwright/test'
import { HomePage } from './pages/home.page'
import { HeaderPage } from './pages/header.page'

const URL = 'https://playwright.dev/'

let homePage: HomePage
let headerPage: HeaderPage

const pageUrl = /.*intro/;

test.beforeEach(async ({ page }) => {
  await page.goto(URL)
  homePage = new HomePage(page)
  headerPage = new HeaderPage(page)
})

async function clickGetStarted(page:Page) {
  // Click the get started link.
  await homePage.clickGetStarted()
}

test.describe('Playwright website', async () => {
  test('has title', async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(homePage.pageTitle);
  });
  
  test('get started link', async ({ page }) => {
    await homePage.clickGetStarted()

    // Expects page to have a heading with the name of Installation.
    await expect(homePage.headerInstallation).toBeVisible();
  });
  
  test.only('check Java page', async ({ page }) => {
    await homePage.clickGetStarted()
    await headerPage.menuNode.hover()
    await headerPage.submenuJava.click()
    
    await expect(page).toHaveURL(headerPage.urlIntroJava);

    await expect(headerPage.headerInstallingPwJs).not.toBeVisible();
    await expect(page.getByText(headerPage.descriptionJava)).toBeVisible();
  });
})
