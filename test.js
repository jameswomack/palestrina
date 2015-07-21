'use strict';

var Assert = require('assert')

var palestrina = require('rewire')('./')

palestrina.__set__({
  process: {
    argv: [ 'node', 'gulpfile', 'foo:bar:trial' ]
  }
})

describe('palestrina', function () {
  describe('argspace', function () {
    it('removes prefixes', function () {
      var result = palestrina.argspace(':', 'trial')

      Assert.deepEqual(result, [ 'foo', 'bar' ])
    })
  })
})
