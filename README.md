> [!CAUTION]
> **This repository is archived and no longer actively maintained.**
>
> We are no longer accepting issues, feature requests, or pull requests.
> For additional support or questions, please visit the [Express.js Discussions page](https://github.com/expressjs/express/discussions).


# SSL Redirect

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

Tiny server that redirects HTTP requests to SSL.
These is currently really rough and you probably shouldn't use it.

## API

```js
var server = require('ssl-redirect')(options)
```

An `http.Server` is returned and automatically starts.

Options are:

- `port` <required> - the port to listen to.
  Should be different than your actual SSL app.
- `host: localhost` - host to redirect to
- `maxAge: 16070400` - max age for `Strict-Transport-Security`
- `includeSubDomains: true` - for `Strict-Transport-Security`

[npm-image]: https://img.shields.io/npm/v/ssl-redirect.svg?style=flat-square
[npm-url]: https://npmjs.org/package/ssl-redirect
[github-tag]: http://img.shields.io/github/tag/pillarjs/ssl-redirect.svg?style=flat-square
[github-url]: https://github.com/pillarjs/ssl-redirect/tags
[travis-image]: https://img.shields.io/travis/pillarjs/ssl-redirect.svg?style=flat-square
[travis-url]: https://travis-ci.org/pillarjs/ssl-redirect
[coveralls-image]: https://img.shields.io/coveralls/pillarjs/ssl-redirect.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/pillarjs/ssl-redirect?branch=master
[david-image]: http://img.shields.io/david/pillarjs/ssl-redirect.svg?style=flat-square
[david-url]: https://david-dm.org/pillarjs/ssl-redirect
[license-image]: http://img.shields.io/npm/l/ssl-redirect.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/ssl-redirect.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/ssl-redirect
[gittip-image]: https://img.shields.io/gittip/jonathanong.svg?style=flat-square
[gittip-url]: https://www.gittip.com/jonathanong/
