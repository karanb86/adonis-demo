import {rules, schema} from '@ioc:Adonis/Core/Validator';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class SignupValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    email: schema.string({trim: true}, [rules.email()]),
    name: schema.string({trim: true}, [rules.required()]),
    ages: schema.array().members(schema.number([rules.myRange(1, 100)])),
    age: schema.number.optional([rules.myRange(12, 100)]),
    addresses: schema.array().members(schema.object().members({
      zipcode: schema.number(),
      street: schema.string(),
      city: schema.string.optional(),
      country: schema.enum(['India', 'US', 'Russia', 'Australia', 'China'])
    }))
  });

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages = {
    email: 'Not a valid mail',
    myRange: '{{ field }} should be in range {{ options.start }}-{{ options.end }}',
    enum: 'The {{ field }} should be among {{ options.choices }}'
  };
}
