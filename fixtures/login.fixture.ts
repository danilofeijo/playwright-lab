import { test as base } from '@playwright/test'
import { generateUserData } from '../helpers/utils'
import { api } from '../api/serverest-client' // ou do path que você definiu

// Tipo de usuário que os testes vão receber
interface LoginUser {
  id: string
  nome: string
  email: string
  password: string
  administrador: 'true' | 'false'
}

interface LoginFixtures {
  adminUser: LoginUser
  commonUser: LoginUser
}

export const loginTest = base.extend<LoginFixtures>({
  /* eslint-disable-next-line no-empty-pattern */
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

  /* eslint-disable-next-line no-empty-pattern */
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
