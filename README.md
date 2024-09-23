[![Playwright Tests](https://github.com/danilofeijo/playwright-lab/actions/workflows/playwright.yml/badge.svg)](https://github.com/danilofeijo/playwright-lab/actions/workflows/playwright.yml) [![Badge ServeRest](https://img.shields.io/badge/API-ServeRest-green)](https://github.com/ServeRest/ServeRest/)
![GitHub](https://img.shields.io/github/license/danilofeijo/playwright-lab)

# playwright-lab

![Icon Playwright][pw-logo] ![Icon laboratory][flask-icon]

A setup for E2E tests with all you need in a real world.

This project was inspired by the [cypress-lab repo][tool-cylabrepo] which has the same purpose but using Cypress framework.

## Features

### Essencial

- ✅ Some application to be tested - [ServeRest][tool-serverest], which simulates an e-commerce application
- ✅ E2E framework to place and run your tests - [Playwright framework][pw-tool] 

### Basic

- ✅ Clean and organized test structure - Page Object model
- ✅ Random data generator - [Faker][tool-faker]
- ✅ Test retry mechanis, toa avoid flakiness - [Playright test retry ][pw-retry]
- ❌ [Environment config][pw-envConfig], to run tests in multiple environment

<!-- ### Mid

### High -->

### No level applied yet

#### Code quality

- ✅ Code static analysis with [typescript-esLint][tool-tseslint]
- ✅ [Prettier][tool-prettier] - to format the code
- ❌ [Husky][tool-husky], to check enhance commits
- ❌ [commitlint][tool-commitlint], to mantain better commit messages based on [Conventional Commits][tool-convCommits]

#### CI/CD

- ✅ [GitHub Actions][tool-ghactions], to automatically trigger test execution in CI/CD
- ✅ [Testing Parallelization][pw-parallelization], to accelerate test execution
- ❌ [mochawesome][tool-mochawesome], to provide feedback about test execution

## Setup

1. Clone repo and access project folder

   `https://github.com/danilofeijo/playwright-lab.git && cd playwright-lab`

2. Install project dependencies

   `npm install`

## CLI commands

### Tests Execution

`npx playwright test` is the default command. It runs tests in headless mode (default)

### Relevant parameters

- `--ui` run tests in UI mode (better dev experience)
- `--project firefox` specify which browser you would like to run the tests
- `--headed` show you how Playwright interacts with the website.
- `-g "critical"` run a test with a specific title
- ~~`--loremIpsum` specify which environment you would like to run the tests~~

The full list of parameters is available at [Running Tests page][ref-1] on Playwright docs.

<!--
Combined commands available in `scripts` session on `package.json` file.
-->

## References

- [Playwright Docs][ref-4]
- [Choose an open source license][ref-9]
- [Como escolher uma licença para seu projeto][ref-10]
- [ServeRest][tool-serverest]
- More itens to be added
<!--
Cypress Reference
- [Utilizando Cypress na vida real][ref-2]
- [Keep passwords secret in E2E tests][ref-3]
- [Publish your Cypress Test Report with GitHub Actions][ref-5]
- [Conventional Commits][ref-7]
- [ESLint + Prettier, a dupla perfeita para produtividade e padronização de código.][ref-8]
  -->

<!-- Links list -->

[flask-icon]: img/icon-lab-128.png 'Flask icon'
[pw-logo]: img/playwright-logo.png 'Playwright logo'
[pw-tool]: https://playwright.dev/
[pw-parallelization]: https://playwright.dev/docs/test-parallel
[pw-retry]: https://playwright.dev/docs/test-retries#retries
[pw-envConfig]: https://playwright.dev/docs/test-projects#configure-projects-for-multiple-environments
[ref-1]: https://playwright.dev/docs/running-tests#running-tests
[ref-2]: https://medium.com/testbean/utilizando-cypress-na-vida-real-a93eec549128
[ref-3]: https://glebbahmutov.com/blog/keep-passwords-secret-in-e2e-tests/
[ref-4]: https://playwright.dev/docs/intro
[ref-5]: https://medium.com/swlh/publish-your-cypress-test-report-with-github-actions-47248788713a
[ref-7]: https://www.conventionalcommits.org/en/v1.0.0/#summary
[ref-8]: https://medium.com/cwi-software/eslint-prettier-a-dupla-perfeita-para-produtividade-e-padroniza%C3%A7%C3%A3o-de-c%C3%B3digo-6a7730cfa358
[ref-9]: https://choosealicense.com/
[ref-10]: https://www.alura.com.br/artigos/como-escolher-uma-licenca-para-seu-projeto
[ref-11]: https://playwrightsolutions.com/the-definitive-guide-to-api-test-automation-with-playwright-part-8-adding-eslint-prettier-and-husky/
[tool-faker]: https://www.npmjs.com/package/faker
[tool-tseslint]: https://typescript-eslint.io/getting-started
[tool-prettier]: https://prettier.io/docs/en/install
[tool-prettierConfig]: https://typescript-eslint.io/users/what-about-formatting/?ref=playwrightsolutions.com#suggested-usage---prettier
[tool-husky]: https://typicode.github.io/husky/
[tool-convCommits]: https://www.conventionalcommits.org/
[tool-ghactions]: https://docs.github.com/en/actions
[tool-commitlint]: https://commitlint.js.org/#/
[tool-mochawesome]: https://www.npmjs.com/package/mochawesome
[tool-serverest]: https://serverest.dev/
[tool-cylabrepo]: https://github.com/danilofeijo/cypress-lab
