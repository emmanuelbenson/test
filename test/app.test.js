const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');

chai.use(chaiHttp);

describe('Server', () => {
	describe('#/api/v1', () => {
		it('Should welcome user to api', done => {
			chai
				.request(app)
				.get('/api/v1')
				.end((err, res) => {
					expect(res).to.have.status(200);
					expect(res.body.message).to.equals("Welcome to express js API project v1 0.1.0");
					done();
				});
		});
	});

	describe('#/api/v1/documentation', () => {
		it('Should return api documentation', done => {

			chai
				.request(app)
				.get('/api/v1/documentation')
				.end((err, res) => {
					expect(res).to.have.status(200);
					expect(res.body).to.have.property('doc');
					done();
				});
		});
	});
});