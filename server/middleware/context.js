// Copyright IBM Corp. 2014,2016. All Rights Reserved.
// Node module: loopback
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var deprecated = require('depd')('loopback');
var m = require('loopback-context-cls/server/middleware/per-request-context');

module.exports = function() {
  deprecated('loopback#context middleware is deprecated. ' +
    'Consider using different means of passing the context around. ' +
    'As a short-term fix, use loopback-context-cls module.');
  return m.apply(this, arguments);
};
