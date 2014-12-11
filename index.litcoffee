
    q        = require 'q'
    pyro     = require 'pyro'
    settings = { }
    resolved = false
    deferred = q.defer()

    pyro
      .monitor 'settings'
      .progress (results) -> 
        unless resolved
          resolved = true
          settings = results.value.value
          deferred.resolve
            get: (field       ) -> settings[field]
            set: (field, value) -> pyro.set "settings/#{field}", value

        settings[results.value.name] = results.value.value

    module.exports = deferred.promise      
