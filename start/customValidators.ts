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

const newRule = 'myRange';

validator.rule(newRule,(value, args: [number, number], {pointer, errorReporter, arrayExpressionPointer}) => {
  if (value < args[0] || value > args[1]) {
    errorReporter.report(pointer, newRule, 'myRange failed', arrayExpressionPointer, {start: args[0], end: args[1]});
  }
});
