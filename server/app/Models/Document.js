'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Document extends Model {
  /**
   * A relationship 
   *
   * @method users
   *
   * @return {Object}
   */
  users() {
    return this.hasMany('App/Models/User')
  }
}

module.exports = Document
