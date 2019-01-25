'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EntitySchema extends Schema {
  up () {
    this.create('entities', (table) => {
      table.increments()
      table.string("name")
      table.timestamps()
    })
  }

  down () {
    this.drop('entities')
  }
}

module.exports = EntitySchema
