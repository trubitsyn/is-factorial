# node-is-factorial [![Build Status](https://travis-ci.org/trubitsyn/node-is-factorial.svg?branch=master)](https://travis-ci.org/trubitsyn/node-is-factorial) [![npm](https://img.shields.io/npm/dt/is-factorial.svg)](https://www.npmjs.com/package/is-factorial)
> Check if something is a factorial

## Install
```sh
$ npm install --save is-factorial
```

## Usage
```js
const isFactorial = require('is-factorial');

isFactorial(120);
//=> true

isFactorial('120');
//=> true

isFactorial('-1');
//=> false
```

## Limitations
`isFactorial` returns `false` for numbers greater than `170!`, which is the highest factorial that is smaller than `Number.MAX_VALUE`. If you need to work with numbers greater than `170!`, feel free to open an issue.


## License
```
Copyright 2018 Nikola Trubitsyn

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

