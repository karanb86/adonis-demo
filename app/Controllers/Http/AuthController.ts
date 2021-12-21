// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext';
import SignupValidator from 'App/Validators/SignupValidator';

export default class AuthController {
  public async login() {
    return { hello: 'world' };
  }
  public async signup(ctx: HttpContextContract) {
    return await ctx.request.validate(SignupValidator);
  }
}
