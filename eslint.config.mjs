import eslint from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'
import playwright from 'eslint-plugin-playwright'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  prettierConfig,
  {
    files: ['e2e/**/*.ts', 'fixtures/**/*.ts', 'pages/**/*.ts', 'api/**/*.ts'],
    plugins: { playwright },
    rules: {
      ...playwright.configs['recommended'].rules,
    },
    ignores: ['test-results/', 'playwright-report', 'summary.json'],
  },
  {
    ignores: [
      // Node
      'node_modules/',
      // Playwright Specific
      'test-results/',
      'playwright-report',
      'summary.json',
      // IDE - VSCode
      '.vscode/*',
      // System Files
      '.DS_Store',
      'Thumbs.db',
      '{"mode":"full","isActive":false}',
      // Docs files
      '*_spec3.json',
    ],
  }
)
