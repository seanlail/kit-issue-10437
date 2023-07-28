module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:svelte/recommended',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	parserOptions: {
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte'],
		sourceType: 'module'
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: { parser: '@typescript-eslint/parser' }
		},
		{
			files: ['tests/**/?(*.)+(spec|test).[jt]s'],
			extends: ['plugin:playwright/recommended']
		},
		{
			files: ['src/**/?(*.)+(spec|test).[jt]s'],
			extends: ['plugin:vitest/recommended']
		}
	]
};
