const chai = require('chai');
const sinon = require('sinon');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const { expect } = chai;

const server = require('../index');

const { PatientRegister } = require('../database/models');
const { mockPatientRegister } = require('./mock');

describe('post /patient', () => {

  describe( 'Quando faz o post com sucesso', () => {
      let response;
        
      const reqBody = {     
        "name": "Nome d de Sousa",
        "birthdate": "1997-11-26",
        "email": "nomed@gmail.com",
        "address": "Rua teste d",
      }
      before(async () => {
          sinon.stub(PatientRegister, 'create').callsFake(mockPatientRegister.create);
          response = await chai.request( server ).post( '/patient' ).send( reqBody );
      })

      after(() => {
        PatientRegister.create.restore();
      } )
    
    it('retorna código de status "200"', () => {
        
        expect(response).to.have.status(200);
    });

    it('o corpo da resposta é um objeto', () => {
        expect(response.body).to.be.an('object');
    });

    it('objeto de resposta possui todas as propriedades ', () => {
        expect(response.body).to.have.all.keys(["address", "birthdate", "email", "name"])
    }); 

  } );
  
  describe( 'Quando o post fail porque nao tem o campo name', () => {
    let response;
      
    const reqBody = {     
      "birthdate": "1997-11-26",
      "email": "nomed@gmail.com",
      "address": "Rua teste d",
    }
    before(async () => {
        sinon.stub(PatientRegister, 'create').callsFake(mockPatientRegister.create);
        response = await chai.request( server ).post( '/patient' ).send( reqBody );
    })

    after(() => {
      PatientRegister.create.restore();
    } )
  
  it('retorna código de status "400"', () => {
      expect(response).to.have.status(400);
  } );

    it( 'o corpo da resposta é um objeto', () => {
      expect(response.body).to.be.an('object');
  });

    it( 'objeto de resposta é obj vazio ', () => {
     expect( response.body ).to.be.empty;
  });  

});

});