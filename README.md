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

cipher.encrypt("hello world", 3);
// khoor zruog

cipher.decrypt("khoor zruog", 3);
//hello world
```

By default `js-cipher` uses the english alphabet, but you can also use a non-english alphabet by adding the alphabet abbreviation in the class constructor.

```js
const cipher = new Cipher("sq");
```

> This will use the albanian alphabet(36 characters) for encryption/decryption.

Supported alphabets:

- English
- Albanian
  <br/>

## License

MIT © [Arlind Xhakoli](https://github.com/ArlindXh)

[travis-url]: https://travis-ci.org/ArlindXh/caesar-cipher
