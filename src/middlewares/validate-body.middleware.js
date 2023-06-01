const { getStatusCode } = require('http-status-codes')

const validateBodyForCreateMovies = (request, response, next) => {
  const { name, year } = request.body;

  if (!name || !year) {
    return response.status(getStatusCode('Bad Request')).json({mensagem: "Query Params 'name' or 'year' cannot send empty!"})
  }

  next()
}

module.exports = {
  validateBodyForCreateMovies
}