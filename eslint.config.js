import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
export default [
    ...eslintPluginAstro.configs.recommended,
    eslintConfigPrettier
];