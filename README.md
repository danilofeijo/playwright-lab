[![Playwright Tests](https://github.com/danilofeijo/playwright-lab/actions/workflows/playwright.yml/badge.svg)](https://github.com/danilofeijo/playwright-lab/actions/workflows/playwright.yml)
[![Badge ServeRest](https://img.shields.io/badge/API-ServeRest-green)](https://github.com/ServeRest/ServeRest/)
![GitHub](https://img.shields.io/github/license/danilofeijo/playwright-lab)

# playwright-lab

![Icon Playwright][img-logo-playwright] ![Icon laboratory][img-icon-flask]

A setup for E2E tests with all you need in a real world.

This repo is an enhanced version of [cypress-lab repo][ref-repo-cylab] which was my first lab dedicated to have testing real world needs.

## Features

### Essential

- ✅ Some application to test - [ServeRest][tool-serverest], a fake e-commerce.
- ✅ E2E framework to run your tests - [Playwright framework][tool-playwright]

### Must Have

- ✅ Test structure to ease maintenance - [Page Object model][ref-doc-pom]
- ✅ Project structure to better scale - [Project Structure][ref-doc-projectstructure]
- ✅ Fake but realistic test data - [Faker][tool-faker]
- ✅ Multi-environment support - [Environment variables configuration][ref-article-multienv]
- ✅ Test retry to identify and mitigate flakiness - [Playright test retry ][ref-doc-retry]
- ✅ Triggered and scheduled execution - [GitHub Actions][ref-doc-ghactions]
- ✅ Test Parallelism - [Playwright config][ref-doc-parallelism]

### Nice to Have

- ✅ Code static analysis - [typescript-esLint][tool-tseslint]
- ✅ Defined code format - [Prettier][tool-prettier], an opinionated code formatter
- ✅ CI test execution - Run scheduled tests against multiple environments (Dev and Stage)
- ✅ API Mocking - to simulate external unpredictable scenarios
- ✅ Test Tagging - to filter and prioritize more relevant tests
- ✅ Test Repport - Published on github pages with history by environment (based on [Martioli's article][ref-article-reportOnGithubPages])
- ❌ Readable commit messages - [Conventional Commits][tool-convCommits] defines convention, [commitlint][tool-commitlint] assure them
- ❌ Enhanced commits - [Husky][tool-husky], automatically lint commit messages, code, and run tests

## Setup

1. Clone the repo and access project folder
   `git clone https://github.com/danilofeijo/playwright-lab.git && cd playwright-lab`

2. Install project dependencies
   `npm install`

3. Install Playwright
   `npx playwright install`

\*\* Important! Assure that you have NodeJs up and running, given we are talking about npm.

## CLI commands

### Tests Execution

`npx playwright test` is the [Playwright's default command][ref-doc-runTests]. When you run it here, it will:

- Run scenarios of the whole test suite;
- Against all of 3 configured environments (Local, Dev, QA);
- On default browser (Chrome headless mode)

### Additional Parameters

Playwright has many [parameters to run tests][ref-doc-runTests]. You might like these below:

- `--ui` to run tests in UI mode (better dev experience)
- `--project projectName` to specify a project/browser to run the test suite
- `-g "@critical"` to filter [tests with tag][ref-doc-tagTests]
- `--debug` to debug test file or specific test scenario.

### Shortcuts

Here are some shortcuts to help you develop, debug and fix tests. Often used for in common days.

- `npm run ui:devui` - Gives you a better dev experience.
  - Open Playwright UI Mode (_--ui_);
  - In dev environment (_ENV=dev_);
  - With no retries on failure (_--retries 0_)
- `npm run ui:dev` - Better for a sanity check after some code change.
  - Runs all tests scenarios;
  - In dev environment (_ENV=dev_);
  - With no retries on failure (_--retries 0_)
- `npm run check:eslint` - eslint checks - code static analysis
- `npm run check:prettier` - prettier checks - code formatter
- `npm run check:all` - eslint and prettier checks, test execution

## References

- [Playwright Docs][ref-doc-playwright]
- [Choose an open source license][ref-doc-license]
- [Como escolher uma licença para seu projeto][ref-article-license]
- [Prettier TS setup][ref-doc-prettierConfig]
- [Configure projects for multiple environments][ref-doc-envConfig]
- [ESLint + Prettier, a dupla perfeita para produtividade e padronização de código.][ref-article-eslintAndPrettier]
- [Adding ESlint, Prettier, and Husky][ref-article-playwrightCombo]
- < More itens will be added soon >

<!-- Intro Links -->

[img-icon-flask]: img/icon-lab-128.png 'Flask icon'
[img-logo-playwright]: img/playwright-logo.png 'Playwright logo'
[ref-repo-cylab]: https://github.com/danilofeijo/cypress-lab

<!-- Feature links -->

[tool-serverest]: https://serverest.dev/
[tool-playwright]: https://playwright.dev/
[ref-doc-pom]: https://playwright.dev/docs/pom
[ref-doc-projectstructure]: https://www.linkedin.com/pulse/how-structure-your-playwright-project-scale-sanity-speed-dimitrova-h5hyf/
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

<!-- Setup Links -->

[ref-doc-runTests]: https://playwright.dev/docs/running-tests#running-tests
[ref-doc-tagTests]: https://playwright.dev/docs/test-annotations#tag-tests

<!-- References Links -->

[ref-doc-playwright]: https://playwright.dev/docs/intro
[ref-doc-license]: https://choosealicense.com/
[ref-article-license]: https://www.alura.com.br/artigos/como-escolher-uma-licenca-para-seu-projeto
[ref-doc-prettierConfig]: https://typescript-eslint.io/users/what-about-formatting/?ref=playwrightsolutions.com#suggested-usage---prettier
[ref-doc-envConfig]: https://playwright.dev/docs/test-projects#configure-projects-for-multiple-environments
[ref-article-eslintAndPrettier]: https://medium.com/cwi-software/eslint-prettier-a-dupla-perfeita-para-produtividade-e-padroniza%C3%A7%C3%A3o-de-c%C3%B3digo-6a7730cfa358
[ref-article-playwrightCombo]: https://playwrightsolutions.com/the-definitive-guide-to-api-test-automation-with-playwright-part-8-adding-eslint-prettier-and-husky/
[ref-article-reportOnGithubPages]: https://blog.martioli.com/publish-your-playwright-reports-to-github-pages/

<!--
Plano de Revisão
Me apresente o Plano de Evolução com o status atualizado

Fases Concluídas
✅ Fase 1: Setup Inicial (100%)
• ✅ Playwright configurado e funcionando
• ✅ Primeiros testes rodando
✅ Fase 2: Multi-Ambiente CI/CD (100%)
• ✅ Arquivos  .env 
• ✅  dotenv  no Playwright
• ✅ Config multi-ambiente
• ✅ Helpers/API adaptados
• ✅ Scripts  package.json 
• ✅ CI/CD base
✅ Fase 3: API Mocking (100%)
• ✅ Mocks nativos  page.route() 
• ✅  e2e/mocks.ts  Serverest
• ✅ Erro 500 validado
• ✅  process.env.API_BASE_URL  dinâmica
Fase adicional
✅ Avaliar viabilidade de ter novos Jobs no workflow
• ✅ Checks de eslint e prettier
• ✅ Jobs rodando separadamente (test e linters)

Próximas Fases
✅ Fase 4: Testes por Tags (0%)
  1. Definir tags  @smoke ,  @regression
  2. Scripts filtrados no  package.json 
  3. Workflow CI com execução seletiva
🔄 Fase 5: Relatórios e Análise (0%)
  1. Allure Report integrado
  2. Screenshots em falhas
  3. Métricas de cobertura
⏳ Fase 6: Otimização Performance (0%)
  1. Paralelização otimizada
  2. Cache de dependências
  3. Dependências compartilhadas
⏳ Fase 7: Deploy Automatizado (0%)
  1. Deploy para staging via GitHub Actions
  2. Aprovação manual para prod
  3. Rollback automatizado

 -->
