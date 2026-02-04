import { test as base } from '@playwright/test'
import { generateUserData } from '../helpers/utils'

type SignupFixtures = {
  signupData: {
    nome: string,
    email: string,
    password: string,
    administrador: 'true' | 'false'
  }
  createdUserData: {
    nome: string,
    email: string,
    password: string,
    administrador: 'true' | 'false',
    id: string
  }
}

export const signupTest = base.extend<SignupFixtures>({
  signupData: async ({}, use) => {
    const userData = generateUserData(true)
    await use(userData)
  },

  createdUserData: async ({ signupData }, use) => {
    await use({
      ...signupData,
      id: ''
    })
  }
})
