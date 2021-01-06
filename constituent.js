'use strict';

var fs = require('fs');
var path = require('path');

exports.get = (event, context, callback) => {
  var contents = '<HTML><TITLE>YO</TITLE><BODY>Hey</BODY</HTML>';


  var result = {
    statusCode: 200,
    body: contents.toString(),
    headers: { 'content-type': 'text/html' }
  };

  callback(null, result);
}