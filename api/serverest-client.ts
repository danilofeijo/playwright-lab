import { request } from '@playwright/test'
// TODO Apply url by environment
// import envUrl from './utils/environment'

class ServeRestAPI {
  private baseURL = 'https://serverest.dev'

  async createUser(userData: { nome: string, email: string, password: string, administrador: string }) {
    const context = await request.newContext()
    const response = await context.post(
      `${this.baseURL}/usuarios`,
      { data: userData }
    )

    const body = await response.json()
    await context.dispose()

    return {
      success: response.ok(),
      userId: body._id,
      message: body.message
    }
  }

  async deleteUser(userId: string) {
    const context = await request.newContext()
    const response = await context.delete(`${this.baseURL}/usuarios/${userId}`)
    await context.dispose()
    return response.ok()
  }
}

export const api = new ServeRestAPI()
