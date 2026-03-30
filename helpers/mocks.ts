import { Route } from '@playwright/test'

export const serverestMocks = {
  error500: async (route: Route) => {
    route.fulfill({
      status: 500,
      body: 'Internal Server Error',
    })
  },

  // GET /produtos 200
  // produtos: (route: Route) => route.fulfill({
  //   status: 200,
  //   json: [
  //     { id: 1, nome: 'Produto Mock 1', preco: 10.99 },
  //     { id: 2, nome: 'Produto Mock 2', preco: 25.50 }
  //   ]
  // }),
}
