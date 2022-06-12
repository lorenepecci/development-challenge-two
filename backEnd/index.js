require( 'dotenv' ).config();
const express = require( 'express' );
app = express();
app.use( express.json() );

const port = process.env.API_PORT || 3000;

app.listen(port, () => console.log('ouvindo porta', port));
