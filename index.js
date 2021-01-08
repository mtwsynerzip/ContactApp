'use strict';

import "@babel/polyfill";
import { readFileSync } from 'fs';
import { sep } from 'path';

export function get(event, context, callback) {
  var contents = readFileSync(`public${sep}index.html`);


  var result = {
    statusCode: 200,
    body: contents.toString(),
    headers: { 'content-type': 'text/html' }
  };

  callback(null, result);
}
