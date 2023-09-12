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
		'@nextcloud',
	],
	plugins: [
		'cypress',
	],
	ignorePatterns: [
		'src/components/Nc*Field/*.vue',
		'src/components/Nc*Picker*/*.vue',
		'src/components/NcAction*/*.vue',
		'src/components/NcAppContent*/*.vue',
		'src/components/NcAppNavigation*/*.vue',
		'src/components/NcAppSettings*/*.vue',
		'src/components/NcAppSidebar*/*.vue',
		'src/components/NcBreadcrumb*/*.vue',
		'src/components/NcContent/*.vue',
		'src/components/NcDashboard*/*.vue',
		'src/components/NcListItem*/*.vue',
		'src/components/NcSettings*/*.vue',
		'src/components/NcAvatar*/*.vue',
		'src/components/NcCounterBubble*/*.vue',
		'src/components/NcEllipsisedOption*/*.vue',
		'src/components/NcEmptyContent*/*.vue',
		'src/components/NcGuestContent*/*.vue',
		'src/components/NcHeaderMenu*/*.vue',
		'src/components/NcIconSvgWrapper*/*.vue',
		'src/components/NcModal*/*.vue',
		'src/components/NcNoteCard*/*.vue',
		'src/components/NcProgressBar*/*.vue',
		'src/components/NcRelatedResourcesPanel*/*.vue',
		'src/components/NcRich*/**/*.vue',
		'src/components/NcSavingIndicatorIcon*/*.vue',
		'src/components/NcSelect*/*.vue',
		'src/components/NcUserBubble*/*.vue',
		'src/components/NcVNodes*/*.vue',
		'src/utils/IsMobileState.js',
	],
	parserOptions: {
		babelOptions: {
			plugins: [
				'@babel/plugin-syntax-import-assertions',
			],
		},
	},
}
