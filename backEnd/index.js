require( 'dotenv' ).config();
const express = require( 'express' );
const cors = require( 'cors' );
const routes = require( './src/routes' );
const middlewareErro = require( './src/middlewares/err' );
app = express();
app.use( express.json() );
app.use( routes );
app.use(cors());
app.use( middlewareErro );
const port = process.env.API_PORT || 3000;

app.listen(port, () => console.log('ouvindo porta', port));
