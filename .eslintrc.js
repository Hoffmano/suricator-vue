module.exports = {
	parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: "module",
        ecmaFeatures: {
            jsx:true
        },
    },
	extends: [
		// add more generic rulesets here, such as:
		// 'eslint:recommended',
		"plugin:vue/vue3-recommended",
		// 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
	],
	rules: {
		// override/add rules settings here, such as:
		// 'vue/no-unused-vars': 'error'
	},
};
