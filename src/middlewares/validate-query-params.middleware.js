const { getStatusCode } = require('http-status-codes')

const validateQueryParamsForMovies = (request, response, next) => {
  const { name } = request.query;

  if (!name) {
    return response.status(getStatusCode('Bad Request')).json({mensagem: "Query Params 'name' cannot send empty!"})
  }

  next()
}

module.exports = {
  validateQueryParamsForMovies
}