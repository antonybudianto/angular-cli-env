'use strict';

var fs = require('fs');
var _ = require('lodash');

module.exports = {
  name: 'env',
  aliases: ['env'],
  description: 'Generate constant file from env.json',
  works: 'insideProject',

  availableOptions: [
    {
        name:         'path',
        type:         String,
        default:      'src/app/shared',
        description:  'The path to write the constant file'
    },
    {
        name:         'name',
        type:         String,
        default:      'env.ts',
        description:  'The constant file name'
    },
    {
        name:         'typeless',
        type:         Boolean,
        default:      false,
        description:  'Generate constant file without static type'
    }
  ],

  run: function(options, rawArgs) {
    generateTsConstFile();

    function generateTsConstFile() {
      var content = fs.readFileSync('env.json');
      var env = JSON.parse(content);
      var envTemplate = '/template/env' + (!options.typeless ? '-static' : '') + '.ts';
      var template = fs.readFileSync(__dirname + envTemplate).toString();
      var compiled = _.template(template);
      var result = compiled({env: env});
      var fullPath = options.path + '/' + options.name;
      fs.writeFileSync(fullPath, result);
      console.log('The constant file is generated at \'' + fullPath + '\'');
    }
  }
};
