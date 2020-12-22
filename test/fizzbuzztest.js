
// Require the dev-dependencies
const chai = require('chai');
const expect = chai.expect;

const chaiHttp = require('chai-http');
const server = require('../app');
// const should = chai.should();

chai.use(chaiHttp);

describe('/GET range document page', () => {
  it('it should GET HTML Page', (done) => {
    chai.request(server)
        .get('/range/')
        .end((err, res) => {
          expect(res.type).equal('text/html');
          done();
        });
  });
});

describe('/GET range input values', () => {
  it('it should contain fizzbuzz in response', (done) => {
    chai.request(server)
        .get('/range/15/30')
        .end(function(err, res) {
          expect(res.type).equal('application/json');
          expect(res.body.length).equal(16);
          expect(typeof(res.body)).equal('object');
          expect(res.body[0].in).
              equal(15);
          expect(res.body[0].result).
              equal('fizzbuzz');
          expect(res.body[res.body.length - 1].result).
              equal('fizzbuzz');
          done();
        });
  });


  it('it should contain only fizz responses', (done) => {
    chai.request(server)
        .get('/range/1/3')
        .end(function(err, res) {
          expect(res.type).equal('application/json');
          expect(typeof(res.body)).equal('object');
          expect(res.body[res.body.length - 1].result).
              equal('fizz');
          done();
        });
  });


  it('it should contain buzz responses', (done) => {
    chai.request(server)
        .get('/range/5/10')
        .end(function(err, res) {
          expect(res.type).equal('application/json');
          expect(typeof(res.body)).equal('object');
          expect(res.body[res.body.length - 1].result).
              equal('buzz');
          expect(res.body[0].result).
              equal('buzz');
          done();
        });
  });
});


describe('/GET range input validation', () => {
  it('it should return range error when end is greater than start', (done) => {
    chai.request(server)
        .get('/range/18/16')
        .end(function(err, res) {
          expect(res.type).equal('application/json');
          expect(typeof(res.body)).equal('object');
          expect(res.status).equal(400);
          expect(res.body.error).equal('Provided range is not Valid');
          done();
        });
  });

  it(`it should return invalid input response when
   text is passed in start`, (done) => {
    chai.request(server)
        .get('/range/data/16')
        .end(function(err, res) {
          expect(res.type).equal('application/json');
          expect(typeof(res.body)).equal('object');
          expect(res.status).equal(400);
          expect(res.body.error).equal('Provided input field(s) are not Valid');
          done();
        });
  });

  it(`it should return invalid input response when
   text is passed in end`, (done) => {
    chai.request(server)
        .get('/range/0/null')
        .end(function(err, res) {
          expect(res.type).equal('application/json');
          expect(typeof(res.body)).equal('object');
          expect(res.status).equal(400);
          expect(res.body.error).equal('Provided input field(s) are not Valid');
          done();
        });
  });

  it('it should return invalid range when start and end are same', (done) => {
    chai.request(server)
        .get('/range/1/1')
        .end(function(err, res) {
          expect(res.type).equal('application/json');
          expect(typeof(res.body)).equal('object');
          expect(res.status).equal(400);
          expect(res.body.error).equal('Provided range is not Valid');
          done();
        });
  });
});

