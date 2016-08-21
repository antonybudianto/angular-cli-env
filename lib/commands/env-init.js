'use strict';

var fs = require('fs');
var _ = require('lodash');

var paths = {
    envJson: 'env.json',
    envInterface: 'src/app/shared/app-env.interface.ts'
};

module.exports = {
  name: 'env:init',
  aliases: ['env:init'],
  description: 'Initialize env templates',
  works: 'insideProject',

  availableOptions: [],

  run: function(options, rawArgs) {
    var sample = {
        TITLE: 'My cool title'
    };

    initEnvJson();
    initEnvInterface();

    function initEnvJson() {
        fs.writeFileSync(paths.envJson, JSON.stringify(sample, null, 4));
        console.log(paths.envJson + ' generated successfully');
    }

    function initEnvInterface() {
        var envInterface = fs.readFileSync(__dirname + '/template/app-env.interface.ts');
        fs.writeFileSync(paths.envInterface, envInterface.toString());
        console.log(paths.envInterface + ' generated successfully');
    }
  }
};
