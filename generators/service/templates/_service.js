'use strict';

var seneca = require('seneca')();

seneca.use('env-plugins');

seneca.add({role: '<%= name %>', cmd: 'action1'}, function(args, callback) {
  callback(null, {data: 'data'});
});

seneca.add({role: '<%= name %>', cmd: 'action2'}, function(args, callback) {
  callback(null, {data: 'data'});
});

seneca.use('mash', {auto: true, pin: {role: '<%= name %>'}});

module.exports.seneca = seneca;
