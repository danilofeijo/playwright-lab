import { test, expect } from '@playwright/test'

import Utils from '../utils/utils'
import { faker } from '@faker-js/faker'

let USER: { nome: string; email: string; pass: string }

test('Should create a new admin user', async ({ page }) => {
  // Arrange
  const nome = Utils.setRandomName()
  const email = Utils.setRandomEmail(nome)

  USER = {
    nome,
    email,
    pass: `Test;123`,
  };

  await page.goto('/cadastrarusuarios')

  // Act
  await page.getByTestId('nome').fill(USER.nome)
  await page.getByTestId('email').fill(USER.email)
  await page.getByTestId('password').fill(USER.pass)
  await page.getByTestId('checkbox').click()
  await page.locator('data-testid=cadastrar').click()

  // Assert
  await expect(page).toHaveURL(/\/admin\/home$/)
  await expect(page.locator('h1')).toBeVisible()
  await expect(page.locator('h1')).toContainText(USER.nome)
});
