import { request, APIRequestContext } from '@playwright/test'

class ServeRestAPI {
  private baseURL: string
  private context?: APIRequestContext

  constructor(baseURL?: string) {
    this.baseURL = baseURL ?? process.env.BASE_URL_API ?? 'https://serverest.dev'
  }

  private async getContext(): Promise<APIRequestContext> {
    if (!this.context) {
      this.context = await request.newContext({
        baseURL: this.baseURL,
        extraHTTPHeaders: { 'Content-Type': 'application/json' }
      })
    }
    return this.context
  }

  async createUser(userData: { nome: string, email: string, password: string, administrador: string }) {
    const ctx = await this.getContext()
    const response = await ctx.post('/usuarios', { data: userData })
    const body = await response.json()

    return {
      success: response.ok(),
      userId: body._id,
      message: body.message
    }
  }

  async deleteUser(userId: string) {
    const ctx = await this.getContext()
    const response = await ctx.delete(`/usuarios/${userId}`)
    return response.ok()
  }

  async dispose() {
    if (this.context) {
      await this.context.dispose()
      this.context = undefined
    }
  }
}

export const api = new ServeRestAPI()
