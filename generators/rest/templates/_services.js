'use strict';

module.exports = function(server) {
  server.register(require('chairo'), function(err) {
    var seneca = server.seneca;

    seneca.use('mesh', {auto:true});

    server.route({
      method: 'GET',
      path: '/service1/action1',
      handler: function(request, reply) {
        seneca.act({role: 'service1', cmd: 'action1'}, function(err, res) {
          reply({result: err ? 'error' : res, err: err});
        });
      }
    });
    server.route({
      method: 'GET',
      path: '/service1/action2',
      handler: function(request, reply) {
        seneca.act({role: 'service1', cmd: 'action2'}, function(err, res) {
          reply({result: err ? 'error' : res, err: err});
        });
      }
    });
    server.route({
      method: 'GET',
      path: '/service2/action1',
      handler: function(request, reply) {
        seneca.act({role: 'service2', cmd: 'action1'}, function(err, res) {
          reply({result: err ? 'error' : res, err: err});
        });
      }
    });
    server.route({
      method: 'GET',
      path: '/service2/action2',
      handler: function(request, reply) {
        seneca.act({role: 'service2', cmd: 'action2'}, function(err, res) {
          reply({result: err ? 'error' : res, err: err});
        });
      }
    });
  });
};
