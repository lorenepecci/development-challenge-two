module.exports = (err, req, res, _next) => 
  res.status(err.status || 500).send(err.message || "Request failed with status code 500" );