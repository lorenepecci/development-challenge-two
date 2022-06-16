const Joi = require( 'joi' );

const d = new Date;
const now = d.toISOString().split('T')[0]
const schema = Joi.object({
  name: Joi.string().min(5).required(),
  birthdate: Joi.date().less(now).required(),
  email: Joi.string().email( { minDomainSegments: 2, tlds: { allow: [ 'com', 'net' ] } } ).required(),
  address:Joi.string().min(5).required(),
} );

const validateTypes = ( req, res, next ) => {
  const { error, value } = schema.validate( req.body );
  if ( error ) {
    const { type, message } = error.details[ 0 ];
    const statusCode = {
      'any.required': 400,
      'string.min': 422,
      'string.email': 422,
      'date.less':422,
    };

    throw { status: statusCode[ type ], message: message };
  }
  return next();
}

  module.exports = {
    validateTypes
  }





 

 