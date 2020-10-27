'use strict';

const appPaths = require('../app-configs/appPaths');
const appSettings = require('../app-configs/appSettings');

function buildJSFiles(done) {
    if (appSettings.scripts === false) {
        return done();
    }

}
