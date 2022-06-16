const chai = require('chai');
const sinon = require('sinon');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const { expect } = chai;

const server = require('../index');

const { PatientRegister } = require('../database/models');
const { mockPatientRegister } = require('./mock');

describe('GET /patient', () => {

  describe('Quando os pacientes são buscados com sucesso', () => {
      let response;

      before(async () => {
          sinon.stub(PatientRegister, 'findAll').callsFake(mockPatientRegister.findAll);
          response = await chai.request(server).get('/patient');
      })

      after(() => {
        PatientRegister.findAll.restore();
      })

    it( 'retorna código de status "200"', () => {
        expect(response).to.have.status(200);
      });

      it('o corpo da resposta é um array', () => {
          expect(response.body).to.be.an('array');
      });

  });

});