import { test as base } from '@playwright/test'
import { generateUserData } from '../helpers/utils'
import { api } from '../api/serverest-client' // ou do path que você definiu

// Tipo de usuário que os testes vão receber
type LoginUser = {
  id: string
  nome: string
  email: string
  password: string
  administrador: 'true' | 'false'
}

type LoginFixtures = {
  adminUser: LoginUser
  commonUser: LoginUser
}

export const loginTest = base.extend<LoginFixtures>({
  adminUser: async ({}, use) => {
    const userData = generateUserData(true)
    const res = await api.createUser(userData)

    const userCreated: LoginUser = {
      ...userData,
      id: res.userId,
    }

    console.log('[login.fixture] Admin user created: ', userCreated.email)
    await use(userCreated)

    // Cleanup
    await api.deleteUser(userCreated.id)
    console.log('[login.fixture] Admin user deleted: ', userCreated.id)
  },

  commonUser: async ({}, use) => {
    const userData = generateUserData(false)
    const res = await api.createUser(userData)

    const userCreated: LoginUser = {
      ...userData,
      id: res.userId,
    }

    console.log('[login.fixture] Common user criado: ', userCreated.email)
    await use(userCreated)

    // Cleanup
    await api.deleteUser(userCreated.id)
    console.log('[login.fixture] Common user deletado: ', userCreated.id)
  },
})

export { expect } from '@playwright/test'
