import js from '@eslint/js';
import sveltePlugin from 'eslint-plugin-svelte';

export default [
  js.configs.recommended,
  ...sveltePlugin.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-debugger': 'error',
    },
  },
  {
    ignores: [
      'node_modules/**',
      '.svelte-kit/**',
      'build/**',
      'dist/**',
    ],
  },
];