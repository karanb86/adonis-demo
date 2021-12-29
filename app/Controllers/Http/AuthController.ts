// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext';
import SignupValidator from 'App/Validators/SignupValidator';
import LoginValidator from 'App/Validators/LoginValidator';
import {users} from 'App/dummydata';
import UnauthenticatedException from 'App/Exceptions/UnauthenticatedException';
import jwt from 'jsonwebtoken';
import {appKey} from 'Config/app';

export default class AuthController {
  public async login(ctx: HttpContextContract) {
    const data = await ctx.request.validate(LoginValidator);

    const user = users.find(user => user.email === data.email && user.password === data.password);
    if(!user) {
      throw UnauthenticatedException.invalidCredentials();
    }

    const token = jwt.sign({sub: user.id}, appKey, {jwtid: 'hello'});

    return {token, user};
  }


  public async signup(ctx: HttpContextContract) {
    return await ctx.request.validate(SignupValidator);
  }
}
