import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import pluginReactJSXRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      js,
      react: pluginReact,
    },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    // rules: {
    //   "react/react-in-jsx-scope": "off",
    //   "react/jsx-uses-react": "off",
    // },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReactJSXRuntime,
]);
