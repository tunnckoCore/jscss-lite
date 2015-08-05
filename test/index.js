/*!
 * jscss-lite <https://github.com/tunnckoCore/jscss-lite>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var fs = require('fs')
var path = require('path')
var test = require('assertit')
var jscssLite = require('../index')

var fixturePath = path.join(__dirname, 'fixture.css')
var expectedPath = path.join(__dirname, 'expected.css')
var expected = fs.readFileSync(expectedPath, 'utf8')

test('jscssLite', function () {
  test('should throw TypeError if not string given', function (done) {
    function fixture () {
      jscssLite(123)
    }

    test.throws(fixture, TypeError)
    test.throws(fixture, /expect `input` be string/)
    done()
  })
  test('should compile given string to CSS (sync api)', function (done) {
    var input = fs.readFileSync(fixturePath, 'utf8')
    var actual = jscssLite(input)

    test.equal(actual, expected, 'should be equal')
    done()

  })
  test('should compile string to CSS (callback api)', function (done) {
    var input = fs.readFileSync(fixturePath, 'utf8')

    jscssLite(input, function (err, actual) {
      test.ifError(err)
      test.equal(actual, expected, 'should be equal')
      done()
    })
  })
})
