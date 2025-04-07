import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginVue from 'eslint-plugin-vue';

import typescriptEslint from 'typescript-eslint';
import globals from 'globals';

export default typescriptEslint.config(
    { ignores: ['*.d.ts', '**/coverage', '**/dist'] },
    {
        extends: [
            eslint.configs.recommended,
            ...typescriptEslint.configs.recommended,
            ...eslintPluginVue.configs['flat/recommended'],
        ],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },

        rules: {
            'vue/multi-word-component-names': 'off',
            'vue/no-reserved-component-names': 'off',
            'no-undef': 'off',
            'vue/no-v-html': 'off',
        },
    },
    eslintConfigPrettier
);
