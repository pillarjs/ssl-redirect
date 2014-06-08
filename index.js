
var http = require('http')
var accepts = require('accepts')
var parse = require('url').parse

module.exports = function (options) {
  options = options || {}

  // port to serve
  var port = options.port
  var host = options.host || 'localhost'

  // strict-transport-security and cache-control
  var STS = 'max-age=' + options.maxAge || '16070400'
  var CC = STS
  if (options.includeSubDomains !== false) STS += '; includeSubDomains'

  return http.createServer(function (req, res) {
    var url = parse(req.url)
    var location = 'https://' + (req.headers.host || host) + url.path

    res.setHeader('Cache-Control', CC) // not sure if this does anything
    res.setHeader('Strict-Transport-Security', STS)

    // these are generally browser requests,
    // so let's not bother with a JSON response :D
    var method = req.method
    if (method === 'HEAD' || method === 'GET') {
      res.statusCode = 301
      res.setHeader('Location', location)
      if (req.method === 'HEAD') return res.end()

      if (accepts(req).types('html') === 'html') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('SSL is required. Redirecting to <a href="' + location + '">' + location + '</a>.')
      } else {
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end('SSL is required. Redirecting to ' + location + '.')
      }
      return
    }

    // these are non-HEAD/GET requests,
    // so probably API requests.
    res.statusCode = 403

    switch (accepts(req).types('html', 'json')) {
    case 'html':
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.end('SSL is required. Please try again at <a href="' + location + '">' + location + '</a>.')
      return
    case 'json':
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      res.end(JSON.stringify({
        message: 'SSL is required. Please try again at ' + location + '.',
        error: true,
        status: 403,
      }))
      return
    default:
      res.setHeader('Content-Type', 'text/plain; charset=utf-8')
      res.end('SSL is required. Please try again at ' + location + '.')
    }
  }).listen(port)
}
