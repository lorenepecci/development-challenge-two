const express = require( 'express' );
const route = express.Router();
const patientController = require('./controllers/patientController')
route.use( '/patient', patientController );
module.exports = route