'use strict';

var assert = require('assert')
var isFactorial = require('./')

it('should match factorials', function() {
    assert(isFactorial('1'))
    assert(isFactorial('2'))
    assert(isFactorial('120'))
    assert(isFactorial('720'))
})

it('should not match factorials', function() {
    assert(!isFactorial(undefined))
    assert(!isFactorial(null))
    assert(!isFactorial(false))
    assert(!isFactorial({}))
    assert(!isFactorial(function() {}))

    assert(!isFactorial('-1'))
    assert(!isFactorial('-1000'))
    assert(!isFactorial('256'))
    assert(!isFactorial('2000'))
    assert(!isFactorial('NaN'))
    assert(!isFactorial('.'))
    assert(!isFactorial('?'))
})
