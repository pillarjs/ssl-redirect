
var request = require('supertest')

var server = require('./')()

describe('SSL Redirect', function () {
  describe('GET', function () {
    it('should return 301 w/ Location, STS, and CC headers', function (done) {
      request(server)
      .get('/')
      .expect('Location', /https/)
      .expect('Strict-Transport-Security', /max-age/)
      .expect(301, done)
    })
  })

  describe('POST', function () {
    it('should return 403 w/ STS and CC headers', function (done) {
      request(server)
      .post('/')
      .expect('Strict-Transport-Security', /max-age/)
      .expect(403, done)
    })
  })
})
