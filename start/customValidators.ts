/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import {validator} from '@ioc:Adonis/Core/Validator';

validator.rule('myRange',(a, _, c) => {
  if (a < 12 || a > 100) {
    c.errorReporter.report(c.field, 'myRange', 'myRange failed');
  }
});
