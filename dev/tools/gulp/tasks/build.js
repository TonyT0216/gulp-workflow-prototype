'use strict';

const concat = require('gulp-concat');
const flatmap = require('gulp-flatmap');
const {dest, src} = require('gulp');

const appPaths = require('../app-configs/appPaths');
const appSettings = require('../app-configs/appSettings');
const themeSet = require('../configs/themes');


function buildJSFiles(done) {
    if (appSettings.scripts === false) {
        return done();
    }

};
