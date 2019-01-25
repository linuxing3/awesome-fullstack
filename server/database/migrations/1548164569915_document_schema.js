'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DocumentSchema extends Schema {
  up () {
    this.create('documents', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      // setting up fields
      table.string("title", 80).notNullable();
      table.string("author", 20).notNullable();
      table.string("content", 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('documents')
  }
}

module.exports = DocumentSchema
