import { test as base } from '@playwright/test'
import { generateUserData } from '../helpers/utils'

interface SignupFixtures {
  signupData: {
    nome: string
    email: string
    password: string
    administrador: 'true' | 'false'
  }
  createdUserData: {
    nome: string
    email: string
    password: string
    administrador: 'true' | 'false'
    id: string
  }
}

export const signupTest = base.extend<SignupFixtures>({
  /* eslint-disable-next-line no-empty-pattern */
  signupData: async ({}, use) => {
    const userData = generateUserData(true)
    await use(userData)
  },

  createdUserData: async ({ signupData }, use) => {
    await use({
      ...signupData,
      id: '',
    })
  },
})
