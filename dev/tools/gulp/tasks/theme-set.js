'use strict';

const themeConfig = require("../configs/themes");
const packages = Object.keys(themeConfig);

module.exports = {
    packages: packages,
    availablePackages: packages.join(', '),
    themeSet: true
};

