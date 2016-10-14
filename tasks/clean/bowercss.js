'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    del = require('del');

module.exports = function () {
    return del([
        config.dependencies.cssoutput + config.dependencies.cssfilename + '.css',
        config.dependencies.cssoutput + config.dependencies.cssfilename + '.min.css'
    ], {force: true});
};
