'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


const Document = use("App/Models/Document");
const AuthorizationService = use("App/Services/AuthService");

/**
 * Resourceful controller for interacting with documents
 */
class DocumentController {
  /**
   * Show a list of all documents.
   * GET documents
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const documents = await Document.all()
    return documents;
  }

  /**
   * Render a form to be used for creating a new document.
   * GET documents/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    return view.render("document")
  }

  /**
   * Create/save a new document.
   * POST documents
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    // 创建document时先验证
    const user = await auth.getUser()
    // 
    const { author, title, content } = request.all()
    let document = new Document()
    // 填充数据
    document.fill({
      title,
      author,
      content
    })
    // 使用user保存，可以保存关系
    await user.documents().save(document)
    // document.save() 不保存关系
    return document
  }

  /**
   * Display a single document.
   * GET documents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return Document.find(params.id)
  }

  /**
   * Render a form to update an existing document.
   * GET documents/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    return view.render("document");
  }

  /**
   * Update document details.
   * PUT or PATCH documents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    console.log(params.id);
    let document = await Document.find(params.id);
    Object.keys(request.body).map(key => {
      document[key] = request.body[key];
    });
    await document.save()
  }
  
  /**
   * Delete a document with id.
   * DELETE documents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const user = await auth.getUser()
    let document = await Document.find(params.id);
    AuthorizationService.verifyAccess(document, user);
    await document.delete();
    return document
  }

  /**
   * Delete all document.
   * DELETE documents/truncate
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async truncate ({ params, request, response }) {
    let documents = await Document.truncate();
    console.log(documents.length);
  }
}

module.exports = DocumentController
