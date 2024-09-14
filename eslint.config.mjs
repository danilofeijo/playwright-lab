// @ts-check

import eslint from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  prettierConfig,
  {
    ignores: [
      // Playwright Specific
      'node_modules/',
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
  },
)
