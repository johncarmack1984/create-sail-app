module.exports = {
	'plugins': [
		'tailwindcss',
	],
	'env': {
		'browser': true,
		'es2021': true,
	},
	'extends': [
		'plugin:tailwindcss/recommended',
		'plugin:vue/vue3-recommended',
		'google',
	],
	'overrides': [
	],
	'parser': 'vue-eslint-parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
	},
	'rules': {
		'object-curly-spacing': [
			'error',
			'always',
		],
		'require-jsdoc': 'off',
		'indent': [
			'error',
			'tab',
		],
		'max-len': 'off',
		'no-unused-vars': [
			'error',
		],
		'valid-jsdoc': 'off',
		'quotes': [
			'error',
			'single',
		],
		'no-tabs': 'off',
		'vue/require-prop-types': 'off',
		'vue/multi-word-component-names': 'off',
		'vue/require-default-prop': 'off',
		'vue/no-v-html': 'off',
		'vue/html-indent': [
			'error',
			'tab',
			{
				'attribute': 1,
				'baseIndent': 1,
			},
		],
		'tailwindcss/classnames-order': [
			'warn',
		],
		'tailwindcss/enforces-negative-arbitrary-values': 'warn',
		'tailwindcss/enforces-shorthand': 'warn',
		'tailwindcss/migration-from-tailwind-2': 'off',
		'tailwindcss/no-arbitrary-value': 'off',
		'tailwindcss/no-custom-classname': [
			'warn',
			{
				'whitelist': [
					'text-green-600',
					'max-w-md',
				],
			},
		],
		'tailwindcss/no-contradicting-classname': 'error',
	},
	'root': true,
	'ignorePatterns': [],
};
