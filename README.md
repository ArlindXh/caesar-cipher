# js-cipher

<br/>

[![Build Status](https://travis-ci.org/ArlindXh/caesar-cipher.svg?branch=master)][travis-url]

<br/>

> A **Caesar Cipher** Implementation in Javascript, allowing you to encrypt and decrypt your texts.

## Install

```
$ npm install js-cipher
```

<br/>

## Usage

Start by `import`-ing the module:

```js
import Cipher from "js-cipher";
```

or `require`-ing it:

```js
const { Cipher } = require("js-cipher");
```

It returns a `Class` containing 2 usable methods, `encrypt` and `decrypt`.

```js
const cipher = new Cipher();

cipher.encrypt("Hello world!", 3);
// Khoor zruog!

cipher.decrypt("Khoor zruog!", 3);
//Hello world!
```

## License

MIT © [Arlind Xhakoli](https://github.com/ArlindXh)

[travis-url]: https://travis-ci.org/ArlindXh/caesar-cipher
