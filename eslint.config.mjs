// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import vue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

export default withNuxt(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...vue.configs['flat/recommended'],
  {
    languageOptions: { parser: vueParser },
    ignores: [
      'node_modules/',
      '.nuxt/',
      'dist/',
      '.output/',
      'coverage/',
      '*.min.js',
      '**/*.d.ts',
      'nuxt.d.ts',
      '**/.nuxt/**',
      '**/dist/**'
    ],
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
  }
)