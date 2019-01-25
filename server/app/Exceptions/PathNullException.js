'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class PathNullException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle () {
    console.log(`Should Not have null path to electron userData`)
  }
}

module.exports = PathNullException
