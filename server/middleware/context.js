// Copyright IBM Corp. 2014,2016. All Rights Reserved.
// Node module: loopback
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var deprecated = require('depd')('loopback');
var impl = require('loopback-context/server/middleware/per-request-context');

module.exports = function() {
  deprecated('loopback#context middleware is deprecated. See ' +
    'https://docs.strongloop.com/display/APIC/Using%20current%20context ' +
    'for more details.');
  return impl.apply(this, arguments);
};
