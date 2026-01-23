import { test as base } from '@playwright/test'
import * as utils from '../helpers/utils'

type SignupFixtures = {
  signupData: {
    nome: string,
    email: string,
    password: string,
    administrador: string
  }
  createdUserData: {
    nome: string,
    email: string,
    password: string,
    administrador: string,
    id: string
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
    })
  },

  createdUserData: async ({ signupData }, use) => {
    const { nome, email, password, administrador } = signupData

    await use({
      nome,
      email,
      password,
      administrador,
      id: ''
    })
  }
})
