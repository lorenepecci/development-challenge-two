require( 'dotenv' ).config();
const express = require( 'express' );
const cors = require( 'cors' );
const routes = require( './src/routes' );
const middlewareErro = require( './src/middlewares/err' );
app = express();
app.use( express.json() );

app.use( cors() );
app.use( middlewareErro );
const port = process.env.API_PORT || 3000;
app.use(
  cors({
    origin: `http://localhost:${port}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }),
); 
app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
  next(); 
} )
app.use( routes );
app.listen(port, () => console.log('ouvindo porta', port));
