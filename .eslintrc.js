module.exports = {
	parser:
		'babel-eslint',
	parserOptions: {
		ecmaVersion: 6,
		sourceType:
			'module',
		ecmaFeatures: {
			jsx: true,
			modules: true,
			experimentalObjectRestSpread: true,
		},
	},
	plugins: [
		'prettier',
		'react',
	],
	extends: [
		'airbnb',
		'prettier/react',
	],
	rules: {
		'class-methods-use-this':
			'off',
		'comma-dangle': 0,
		indent: [
			2,
			'tab',
		],
		'react/jsx-uses-vars': 1,
		'react/display-name': 1,
		'no-unused-vars':
			'warn',
		'no-console': 0,
		'no-unexpected-multiline':
			'warn',
		quotes:
			'off',
		'react/destructuring-assignment':
			'off',
		'react/jsx-no-bind':
			'off',
		'react/jsx-filename-extension':
			'off',
		'react/prefer-stateless-function':
			'off',
		'react/prop-types':
			'off',
		'no-alert':
			'off',
		'no-tabs': 0,
		'linebreak-style': 0,
		'no-underscore-dangle': 0,
		'react/no-string-refs': 0,
		eqeqeq:
			'error',
	},
	settings: {
		react: {
			pragma:
				'React',
			version:
				'16.8.6',
		},
	},
	globals: {
		navigator: true,
		alert: true,
		fetch: true,
		coordinate: true,
		isFunction: true,
		FormData: true,
	},
};
