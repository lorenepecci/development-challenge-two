module.exports = ( err, req, res, _next ) => {
  return res.status( err.status || 500 ).send( err.message || 'error');
}