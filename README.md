# [jscss-lite][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Write Javascript-ish things in your CSS. Or call it `Embedded CSS` - write CSS in your Javascript!

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![cov status][cov-img]][cov-url] [![dependency status][david-img]][david-url]


## Install
```
npm i jscss-lite --save
npm test
```


## Usage
> For more use-cases see the [tests](./test/index.js)

```js
var fs = require('fs')
var jscssLite = require('jscss-lite')

var input = fs.readFileSync('./test/fixture.css', 'utf8')
var css = jscssLite(input)

// or callback api
jscssLite(input, function (err, css) {
  console.log(err, css)
})
```

## Example input

```CSS
var cool_colour = "rgb(39, 192, 129)";

* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

html {
  background-color: rgba(3, 4, 5, 0.6);
}

html[lang|="en"] {
  color: rgb(238 , 23, 12);
  font-family: Open Sans;
}

for (var i = 0; i < 5; i++) {
  div .hello:nth-child(|i|) {
    color: rgb(| i * 10 |, 20, |i * 20|);
  }
}

var i = 0;

p > li {
  background-color: |cool_colour|;
}

while (i < 4) {
  p > li.number-|i| {
    width: |i * 10|;
  }

  i++;
}
```


## Related
- [catchy](https://github.com/tunnckoCore/catchy): Promise-like async parallel control flow library, without so much abstraction.
- [dual-emitter](https://github.com/tunnckocore/dual-emitter): :tropical_drink: EventEmitter done right and no dependencies. For nodejs and the browser (>= IE8). Can emit custom or DOM events.
- [dush](https://github.com/tunnckocore/dush): Minimalist 1.5kb event delegation for the browser (IE8+) and nodejs.
- [j140](https://github.com/tunnckoCore/j140): Javascript template engine in just 140 bytes, for browser and node - by Jed Schmidt
- [jscss](https://github.com/AlexanderSelzer/jscss): CSS embedded in JavaScript
- [minigrid](http://alves.im/minigrid): Minimal 2kb zero dependency cascading grid layout
- [octet](https://github.com/tunnckocore/octet): 1kb template engine for the browser and nodejs. Support helpers, partials and more.


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/jscss-lite/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/jscss-lite
[npmjs-img]: https://img.shields.io/npm/v/jscss-lite.svg?label=jscss-lite

[license-url]: https://github.com/tunnckoCore/jscss-lite/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/jscss-lite
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/jscss-lite.svg

[cov-url]: https://codeclimate.com/github/tunnckoCore/jscss-lite
[cov-img]: https://img.shields.io/codeclimate/coverage/github/tunnckoCore/jscss-lite.svg

[travis-url]: https://travis-ci.org/tunnckoCore/jscss-lite
[travis-img]: https://img.shields.io/travis/tunnckoCore/jscss-lite.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/jscss-lite
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/jscss-lite.svg

[david-url]: https://david-dm.org/tunnckoCore/jscss-lite
[david-img]: https://img.shields.io/david/dev/tunnckoCore/jscss-lite.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg