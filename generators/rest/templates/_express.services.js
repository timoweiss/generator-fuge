'use strict';
var seneca = require('seneca')();

seneca.use('mesh', {auto:true});

module.exports = function(app) {

  app.get('/service1/action1', function(req, res) {
    seneca.act({role: 'service1', cmd: 'action1'}, function(err, result) {
      res.send({result: err ? 'error' : result, err: err});
    });
  });

  app.get('/service1/action2', function(req, res) {
    seneca.act({role: 'service1', cmd: 'action2'}, function(err, result) {
      res.send({result: err ? 'error' : result, err: err});
    });
  });

  app.get('/service2/action1', function(req, res) {
    seneca.act({role: 'service2', cmd: 'action1'}, function(err, result) {
      res.send({result: err ? 'error' : result, err: err});
    });
  });

  app.get('/service2/action2', function(req, res) {
    seneca.act({role: 'service2', cmd: 'action2'}, function(err, result) {
      res.send({result: err ? 'error' : result, err: err});
    });
  });
}
