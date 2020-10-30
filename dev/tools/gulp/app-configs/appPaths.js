'use strict';

module.exports = {
    jsFiles: {
        moduleInputDir: 'app/code/**/**/view/**/web/js/*.js',
        themeInputDir: 'app/design/**/**/**/web/js/*/*.js',
        outputDir: 'pub/static/js/*'
    },
    lessFiles: {
        moduleInputDir: 'app/code/**/**/view/**/web/css/source/*.less',
        themeInputDir: 'app/design/**/**/**/**/web/css/source/*.less',
        outputDir: 'pub/static/css/*'
    },
    // rootAdminPanelThemeGlob: 'app/design/adminhtml/**',
    // rootCustomModulesGlob: 'app/code/**',
    // rootStaticFolder: 'pub/static/',
    // rootStaticFolderGlob: 'pub/static/**',
    // rootStorefrontThemeGlob: 'app/design/frontend/**'
};
