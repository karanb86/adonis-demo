import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class Profiler {
  public async handle({}: HttpContextContract, next: () => Promise<void>) {
    const start = Date.now();
    // code for middleware goes here. ABOVE THE NEXT CALL
    await next();

    const end = Date.now();

    console.log(`Total time: ${end - start}ms`);
  }
}
