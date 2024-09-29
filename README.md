[![Playwright Tests](https://github.com/danilofeijo/playwright-lab/actions/workflows/playwright.yml/badge.svg)](https://github.com/danilofeijo/playwright-lab/actions/workflows/playwright.yml) [![Badge ServeRest](https://img.shields.io/badge/API-ServeRest-green)](https://github.com/ServeRest/ServeRest/)
![GitHub](https://img.shields.io/github/license/danilofeijo/playwright-lab)

# playwright-lab

![Icon Playwright][img-logo-playwright] ![Icon laboratory][img-icon-flask]

A setup for E2E tests with all you need in a real world.

This project was inspired by the [cypress-lab repo][ref-repo-cylab] which has the same purpose but using Cypress framework.

## Features
<!--
### Test suite
### Code quality
### CI/CD
-->

### Essential

- ✅ Some application to test - [ServeRest][tool-serverest], a fake e-commerce.
- ✅ E2E framework to run your tests - [Playwright framework][tool-playwright] 

### Must Have

- ✅ Test structure to ease maintenance - [Page Object model][ref-doc-pom]
- ✅ Fake but realistic test data - [Faker][tool-faker]
- ❌ Multi-environment support - [Environment variables configuration][ref-article-multienv]
- ✅ Test retry to identify and mitigate flakiness - [Playright test retry ][ref-doc-retry]
- ✅ Triggered and scheduled execution - [GitHub Actions][ref-doc-ghactions]
- ✅ Code static analysis - [typescript-esLint][tool-tseslint]

### Nice to Have

- ✅ Test Parallelism - [Playwright config][ref-doc-parallelism]
- ✅ Defined code format - [Prettier][tool-prettier], an opinionated code formatter
- ❌ Readable commit messages - [Conventional Commits][tool-convCommits] defines convention, [commitlint][tool-commitlint] assure them
- ❌ Enhanced commits - [Husky][tool-husky], automatically lint commit messages, code, and run tests
- ❌ Visual repport about test results - [mochawesome][tool-mochawesome]

## Setup

1. Clone repo and access project folder

   `https://github.com/danilofeijo/playwright-lab.git && cd playwright-lab`

2. Install project dependencies

   `npm install`

## CLI commands

### Tests Execution

- `npx playwright test` is the default command. It runs tests on all browsers as configured (headless mode by default)

### Relevant parameters

- `--ui` run tests in UI mode (better dev experience)
- `--project firefox` specify which browser you would like to run the tests
- `--headed` show you how Playwright interacts with the website.
- `-g "critical"` run a test with a specific title

The full list of parameters is available at [Running Tests page][ref-1] on Playwright docs.
[ref-1]: https://playwright.dev/docs/running-tests#running-tests

### Shortcuts

This repo have some script shortcuts to help you along test development

- `npm run e2e:dev` - runs all tests, feedback on terminal, 1 retry
- `npm run e2e:ui-dev` - opens UI Mode, 0 retries. Gives you a better dev experience
- `npm run check:eslint` - eslint checks - code static analysis
- `npm run check:prettier` - prettier checks - code formatter

<!--
Combined commands available in `scripts` session on `package.json` file.
-->

## More References

- [Playwright Docs][ref-doc-playwright]
- [Choose an open source license][ref-doc-license]
- [Como escolher uma licença para seu projeto][ref-article-license]
- [Prettier TS setup][ref-doc-prettierConfig]
- [Configure projects for multiple environments][ref-doc-envConfig]
- [ESLint + Prettier, a dupla perfeita para produtividade e padronização de código.][ref-article-eslintAndPrettier]
- [Adding ESlint, Prettier, and Husky][ref-article-playwrightCombo]
- < More itens will be added soon >
<!--
Cypress Reference
- [Keep passwords secret in E2E tests][ref-3]
- [Publish your Cypress Test Report with GitHub Actions][ref-5]
[ref-3]: https://glebbahmutov.com/blog/keep-passwords-secret-in-e2e-tests/
[ref-5]: https://medium.com/swlh/publish-your-cypress-test-report-with-github-actions-47248788713a
  -->

<!-- Links list -->

<!-- Intro Links -->
[img-icon-flask]: img/icon-lab-128.png 'Flask icon'
[img-logo-playwright]: img/playwright-logo.png 'Playwright logo'
[ref-repo-cylab]: https://github.com/danilofeijo/cypress-lab

<!-- Feature links -->
[tool-serverest]: https://serverest.dev/
[tool-playwright]: https://playwright.dev/

[ref-doc-pom]: https://playwright.dev/docs/pom
[tool-faker]: https://www.npmjs.com/package/faker
[ref-article-multienv]: https://playwrightsolutions.com/the-definitive-guide-to-api-test-automation-with-playwright-part-11-adding-multi-environment-support/
[ref-doc-retry]: https://playwright.dev/docs/test-retries#retries
[ref-doc-ghactions]: https://docs.github.com/en/actions
[tool-tseslint]: https://typescript-eslint.io/getting-started

[ref-doc-parallelism]: https://playwright.dev/docs/test-parallel
[tool-prettier]: https://prettier.io/docs/en/install
[tool-commitlint]: https://commitlint.js.org/#/
[tool-convCommits]: https://www.conventionalcommits.org/
[tool-husky]: https://typicode.github.io/husky/
[tool-mochawesome]: https://www.npmjs.com/package/mochawesome

<!-- References Links -->
[ref-doc-playwright]: https://playwright.dev/docs/intro
[ref-doc-license]: https://choosealicense.com/
[ref-article-license]: https://www.alura.com.br/artigos/como-escolher-uma-licenca-para-seu-projeto
[ref-doc-prettierConfig]: https://typescript-eslint.io/users/what-about-formatting/?ref=playwrightsolutions.com#suggested-usage---prettier
[ref-doc-envConfig]: https://playwright.dev/docs/test-projects#configure-projects-for-multiple-environments
[ref-article-eslintAndPrettier]: https://medium.com/cwi-software/eslint-prettier-a-dupla-perfeita-para-produtividade-e-padroniza%C3%A7%C3%A3o-de-c%C3%B3digo-6a7730cfa358
[ref-article-playwrightCombo]: https://playwrightsolutions.com/the-definitive-guide-to-api-test-automation-with-playwright-part-8-adding-eslint-prettier-and-husky/
