
var request = require('supertest')

var server = require('..')()

describe('SSL Redirect', function () {
  describe('HEAD', function () {
    it('should return 301 w/ Location, STS', function (done) {
      request(server)
      .head('/')
      .expect('Location', /https/)
      .expect('Strict-Transport-Security', /max-age/)
      .expect(301, done)
    })
  })

  describe('GET', function () {
    it('should return 301 w/ Location, STS', function (done) {
      request(server)
      .get('/')
      .expect('Location', /https/)
      .expect('Strict-Transport-Security', /max-age/)
      .expect(301, done)
    })

    it('should work with accept: text/plain', function (done) {
      request(server)
      .get('/')
      .set('Accept', 'text/plain')
      .expect('Content-Type', /text\/plain/)
      .expect(301, done)
    })
  })

  describe('POST', function () {
    it('should return 403 w/ STS', function (done) {
      request(server)
      .post('/')
      .expect('Strict-Transport-Security', /max-age/)
      .expect(403, done)
    })

    it('w/ accept: json', function (done) {
      request(server)
      .post('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /application\/json/)
      .expect('Strict-Transport-Security', /max-age/)
      .expect(403, done)
    })

    it('w/ accept: text', function (done) {
      request(server)
      .post('/')
      .set('Accept', 'text/plain')
      .expect('Content-Type', /text\/plain/)
      .expect('Strict-Transport-Security', /max-age/)
      .expect(403, done)
    })
  })
})
