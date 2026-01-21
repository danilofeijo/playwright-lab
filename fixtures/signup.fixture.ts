import {test as base } from '@playwright/test'
import * as utils from '../utils/utils'

type SignupFixtures = {
  signupData: { nome: string, email: string, pass: string }
}

export const signupTest = base.extend<SignupFixtures>({
  signupData: async ({}, use) => {
    const userName = utils.generateFullName()

    await use({
      nome: userName,
      email: utils.generateEmail(userName),
      pass: utils.generatePassword(),
    })
  },
})
