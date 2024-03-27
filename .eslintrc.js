module.exports = {
	root: true,
	extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
	plugins: ['prettier'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2022,
	},
	env: {
		browser: true,
		node: true,
	},
};
