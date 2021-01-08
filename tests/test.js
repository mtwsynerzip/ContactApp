'use strict';

import { number, string, value } from 'unit.js';
import { get } from '../index.js';

describe('Tests index', function() {
  it('verifies successful response', function(done) {
    get({ /* event */ }, { /* context */ }, (err, result) => {
      try {
        number(result.statusCode).is(200);
        string(result.body).contains('Congratulations');
        value(result).hasHeader('content-type', 'text/html');
        done();
      } catch(error) {
        done(error);
      }
    });
  });
});
