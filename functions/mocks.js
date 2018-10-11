const merge = require('lodash/merge');
const has = require('lodash/has');
const get = require('lodash/get');

const dictionary = {
  'httpGet': require('../templates/httpGet.json'),
};

module.exports = function createEvent(config) {
  const event = get(dictionary, config.template, {});
  return has(config, 'merge') ? merge(event, config.merge) : event;
};
