/* eslint-env node */
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'my-engine',

  lazyLoading: Object.freeze({
    enabled: false
  }),

  isDevelopingAddon() {
    return true;
  },

  eyeglass: {
    eyeglass: {
      modules: []
    },
    annotation: 'my-engine',
    persistentCache: false,
  },
});
