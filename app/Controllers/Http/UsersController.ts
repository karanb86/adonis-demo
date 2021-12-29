import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

export default class UsersController {
  public async index({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show(ctx: HttpContextContract) {
    return {user: ctx.request.loggedInUser};
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
