const supertest = require('supertest');
const validator = require('validator');
const assert = require('assert');
const is = require('is_js');

const request = supertest('http://127.0.0.1/fusionsuite/backend/index.php');

/**
 * /v1/status endpoint
 */
describe('Endpoint /v1/status', function() {
  it('respond with json containing the status of the backend', function(done) {
    request
    .get('/v1/status')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
  });
});


/**
 * /v1/types endpoint
 */
// describe('Endpoint /v1/types', function() {
//   container = request(host_url + '/v1/types');
//   it('respond with json containing the list of types', function(done) {
//     container
//     .get('')
//     .set('Accept', 'application/json')
//     .expect('Content-Type', /json/)
//     .expect(200, done);
//   });

// POST
// PATCH

  // it('respond with json containing the type with id 1', function(done) {
  //   container
  //   .get('/1')
  //   .set('Accept', 'application/json')
  //   .expect('Content-Type', /json/)
  //   .expect(200, done);
  // });
// /1/property
// POST
// DELETE

// /1/items
// GET
// POST

// /1/propertygroups
// POST

// });

