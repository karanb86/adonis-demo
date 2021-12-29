import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import UnauthenticatedException from 'App/Exceptions/UnauthenticatedException';
import jwt from 'jsonwebtoken';
import {appKey} from 'Config/app';
import {users} from 'App/dummydata';

export default class Auth {
  public async handle(ctx: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    const token = ctx.request.headers().authorization;
    if (!token) {
      throw UnauthenticatedException.noToken();
    }
    try {
      const data = jwt.verify(token, appKey);
      ctx.request.loggedInUser = users.find(u => u.id === data.sub);
    } catch (e) {
      if (e.name === 'TokenExpiredError') {
        throw UnauthenticatedException.tokenExpired();
      }
      throw UnauthenticatedException.invalidToken();
    }

    await next();
  }
}
