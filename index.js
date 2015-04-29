var _ = require('lodash');
var cssnext = require('cssnext');
var path = require('path');
var glob = require('glob');

_.templateSettings = {
  evaluate: /\{\{(.+?)\}\}/g,
  interpolate: /\{\{=(.+?)\}\}/g
};

function lotus(str, opts) {
  var template = _.template(str);
  var css = cssnext(template(), {
    'import': {
      from: opts.base || process.cwd(),
      transform: function(contents) {
        return _.template(contents)();
      }
    }
  });
  return css;
}

module.exports = lotus;