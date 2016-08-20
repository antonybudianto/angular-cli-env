/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-env',

  includedCommands: function() {
    return {
      'env:init': require('./lib/commands/env-init'),
      'env': require('./lib/commands/env')
    };
  }
};
