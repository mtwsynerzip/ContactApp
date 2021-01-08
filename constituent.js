'use strict';

import fs from 'fs';
import path from 'path';

export function get(event, context, callback) {
  var contents = '<HTML><TITLE>YO</TITLE><BODY>Hey</BODY</HTML>';

  var result = {
    statusCode: 200,
    body: contents.toString(),
    headers: { 'content-type': 'text/html' }
  };

  callback(null, result);
}