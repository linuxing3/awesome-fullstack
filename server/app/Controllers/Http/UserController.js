'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const User = use("App/Models/User");

class UserController {


  /**
   * Try to login with auth middleware
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Auth} ctx.auth
   */
  async login({ request, auth }) {
    const { email, password } = request.all()
    const token = auth.attempt(email, password)
    return token
  }

  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view, auth }) {

    const user = await auth.getUser()
    console.log(user.id)
    return user.tokens().fetch()
  }

  /**
   * Render a form to be used for creating a new user.
   * GET users/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
    return view.render("user", { title } )
  }

  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    let user = new User()
    user.username =  request.body.username
    user.password =  request.body.password
    user.email =  request.body.email
    await user.save()
  }

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    // check auth
    if (auth.user.id !== Number(params.id)) {
      return 'You cannot see someone else\'s profile'
    }
    return auth.user
    // return User.find(params.id)
  }

  /**
   * Render a form to update an existing user.
   * GET users/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
    return view.render("user")
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    console.log(params.id);
    let user = await User.find(params.id);
    Object.keys(request.body).map(key => {
      user[key] = request.body[key];
    });
    await user.save()
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    let user = await User.find(params.id);
    await user.delete();
  }


  /**
   * Delete all user.
   * DELETE user/truncate
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async truncate({ params, request, response }) {
    let users = await User.truncate();
    console.log(users.length);
  }
}

module.exports = UserController
