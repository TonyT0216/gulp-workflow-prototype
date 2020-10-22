'use strict';

// Dependencies from NPM
const { gulp, src, dest, watch, series, parallel, task } = require('gulp');
const del = require('del');
const requireDir = require('require-dir');

// Dependencies from Self
const appSettings = require('./dev/tools/gulp/app-configs/appSettings');
const build = require('./dev/tools/gulp/tasks/build');
const clean = require('./dev/tools/gulp/tasks/clean');

// Default task
exports.default = build.build;
