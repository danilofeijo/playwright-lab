import { test as base } from '@playwright/test'
import * as utils from '../helpers/utils'

type SignupFixtures = {
  signupData: {
    nome: string,
    email: string,
    password: string,
    administrador: string,
    // id: string
  }
}

export const signupTest = base.extend<SignupFixtures>({
  signupData: async ({}, use) => {
    const userName = utils.generateFullName()

    await use({
      nome: userName,
      email: utils.generateEmail(userName),
      password: utils.generatePassword(),
      administrador: 'true',
      // id: ''
    })
  },
})
