const babelConfig = require('@nextcloud/babel-config')

babelConfig.presets.push('babel-preset-typescript-vue3')
babelConfig.presets.push('@babel/preset-typescript')

module.exports = babelConfig
