export default {
  local: {
    api: 'https://local-myapp.mydomain.com/api',
    home: 'https://local-myapp.mydomain.com',
  },
  development: {
    api: 'https://serverest.dev',
    home: 'https://front.serverest.dev',
  },
  qa: {
    api: 'https://serverest.dev',
    home: 'https://front.serverest.dev',
  },
  staging: {
    api: 'https://staging-myapp.mydomain.com/api',
    home: 'https://staging-myapp.mydomain.com',
  },
  production: {
    api: 'https://myapp.mydomain.com/api',
    home: 'https://myapp.mydomain.com',
  },
  ci: {
    prefix: 'https://dev-myapp-',
    suffix: '.mydomain.com',
  },
  example: {
    home: 'https://playwright.dev',
  },
}
