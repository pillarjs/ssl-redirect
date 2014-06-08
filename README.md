
# SSL Redirect

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
