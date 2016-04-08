'use strict';

var seneca = require('seneca')();

seneca.use('env-plugins');

seneca.use('mash', {base: true});

module.exports.seneca = seneca;
