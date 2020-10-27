'use strict';

const appPaths = require('../app-configs/appPaths');
const appSettings = require('../app-configs/appSettings');
const del = require('del');

function cleanStaticDir(done) {
    if (appSettings.clean === false) {
        return done();
    }

    del.sync([
        appPaths.rootStaticFolderGlob
    ]);

    return done();
}

exports.clean = cleanStaticDir;
