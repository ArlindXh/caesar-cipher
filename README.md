[![Build Status](https://travis-ci.org/ArlindXh/caesar-cipher.svg?branch=master)][travis-url]

## Install

```
$ npm install js-cipher
```

<br/>

## Usage

Start by `import`-ing or `require`-ing the module:

```js
import Cipher from "js-cipher";
```

It returns a `Class` containing 2 usable methods, `encrypt` and `decrypt`:

```js
const cipher = new Cipher();

cipher.encrypt("hello world", 3);
// khoor zruog

cipher.decrypt("khoor zruog", 3);
//hello world
```

<br/>

## License

MIT © [Arlind Xhakoli](https://github.com/ArlindXh)

[travis-url]: https://travis-ci.org/ArlindXh/caesar-cipher
