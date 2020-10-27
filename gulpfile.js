'use strict';

// Dependencies from NPM
const { gulp, src, dest, watch, series, parallel, task } = require('gulp');
const requireDir = require('require-dir');

// Dependencies from Self
const build = require('./dev/tools/gulp/tasks/build');
const clean = require('./dev/tools/gulp/tasks/clean');

// Default task
exports.default = build.build;
