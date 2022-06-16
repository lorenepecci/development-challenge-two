module.exports = ( err, req, res, _next ) => {
  console.log(err)
  return res.status( err.status || 500 ).send( err.message || 'error');
}