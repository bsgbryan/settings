// Generated by CoffeeScript 1.8.0
(function() {
  var deferred, pyro, q, resolved, settings;

  q = require('q');

  pyro = require('pyro');

  settings = {};

  resolved = false;

  deferred = q.defer();

  pyro.monitor('settings').progress(function(results) {
    if (!resolved) {
      resolved = true;
      console.log('name', results);
      settings[results.value.name] = results.value.value;
      deferred.resolve({
        get: function(field) {
          return settings[field];
        },
        set: function(field, value) {
          return pyro.set("settings/" + field, value);
        }
      });
    }
    return settings[results.value.name] = results.value.value;
  });

  module.exports = deferred.promise;

}).call(this);
