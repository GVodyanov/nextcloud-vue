module.exports = {
	globals: {
		EMOJIS: true,
		PRODUCTION: true,
		SCOPE_VERSION: true,
		TRANSLATIONS: true,
		oc_userconfig: true,
		appName: true,
		appVersion: true,
	},
	extends: [
		'@nextcloud/eslint-config/typescript',
	],
	plugins: [
		'cypress',
	],
	rules: {
		'jsdoc/check-tag-names': [
			'warn',
			{
				definedTags: [
					'values', // required for vue-styleguideist
					'notExported',
					'packageDocumentation',
					'jest-environment',
				],
			},
		],
	},
	ignorePatterns: [
		'src/components/NcAppContent*/*.vue',
		'src/components/NcAppNavigation*/*.vue',
		'src/components/NcAppSettings*/*.vue',
		'src/components/NcAppSidebar*/*.vue',
		'src/components/NcContent/*.vue',
		'src/components/NcDashboard*/*.vue',
		'src/components/NcRelatedResourcesPanel*/*.vue',
		'src/components/NcRich*/**/*.vue',
		'src/components/NcUserBubble*/*.vue',
		'src/components/NcVNodes*/*.vue',
		'src/utils/IsMobileState.js',
	],
}
