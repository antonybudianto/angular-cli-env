'use strict';

var fs = require('fs');
var _ = require('lodash');

var paths = {
    envJson: 'env.json',
    envTemplate: 'config/env.template.ts'
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
    initEnvTemplates();

    function initEnvJson() {
        fs.writeFileSync(paths.envJson, JSON.stringify(sample, null, 4));
        console.log(paths.envJson + ' generated successfully');
    }

    function initEnvTemplates() {
        var envTemplate = fs.readFileSync(__dirname + '/template/env.ts');
        fs.writeFileSync(paths.envTemplate, envTemplate.toString());
        console.log(paths.envTemplate + ' generated successfully');
    }
  }
};
