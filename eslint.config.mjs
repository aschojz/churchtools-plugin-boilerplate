import { defineConfig } from 'eslint/config';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default defineConfig([
    {
        extends: compat.extends(
            'eslint:recommended',
            'plugin:vue/vue3-recommended',
            '@vue/typescript/recommended',
            '@vue/prettier'
        ),

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
]);
