const Joi = require( 'joi' );

const schema = Joi.object({
  name: Joi.string().min(5).required(),
  birthdate: Joi.date().required(),
  email:Joi.string().email().required(),
  address:Joi.string().min(5).required(),
} );

const validateTypes = ( req, res, next ) => {
  const { error } = schema.validate( req.body );
  if ( error ) {
    const { type, message } = error.details[ 0 ];

    const statusCode = {
      'any.required': 400,
      'string.min': 422,
    };

     return res.status( statusCode[ type ] ).send(  message );
  }
  return next();
}

  module.exports = {
    validateTypes
  }





 

 