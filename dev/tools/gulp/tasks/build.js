'use strict';
const del = require('del');
const requireDir = require('require-dir');

console.log(__dirname);

function build(cb) {
    cb();
}

exports.build = build;
