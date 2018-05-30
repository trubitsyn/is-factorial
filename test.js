/*
 * Copyright 2018 Nikola Trubitsyn
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
