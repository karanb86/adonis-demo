import { Exception } from '@adonisjs/core/build/standalone';

/*
|--------------------------------------------------------------------------
| Exception
|--------------------------------------------------------------------------
|
| The Exception class imported from `@adonisjs/core` allows defining
| a status code and error code for every exception.
|
| @example
| new UnauthenticatedException('message', 500, 'E_RUNTIME_EXCEPTION')
|
*/
export default class UnauthenticatedException extends Exception {
  private constructor(message) {
    super(message);
  }

  public static noToken() {
    return new UnauthenticatedException('No auth token found');
  }

  public static invalidToken() {
    return new UnauthenticatedException('Invalid auth token');
  }

  public static tokenExpired() {
    return new UnauthenticatedException('Auth token has expired');
  }

  public static invalidCredentials() {
    return new UnauthenticatedException('Invalid credentials');
  }
}
