
var each = require('each');


/**
 * A list all of our integration slugs.
 */

var integrations = [
  'adroll',
  'customerio',
  'errorception',
  'google-analytics',
  'heap',
  'hubspot',
  'intercom',
  'mixpanel',
  'olark',
  'sentry'
];


/**
 * Expose the integrations, using their own `name` from their `prototype`.
 */

each(integrations, function (slug) {
  var Integration = require('./integrations/' + slug);
  exports[Integration.prototype.name] = Integration;
});
