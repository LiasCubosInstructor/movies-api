const database = require('../database')
const { getStatusCode } = require('http-status-codes')
const { formatterStringForSearching } = require('../helpers/string.helper')

const getMovies = (request, response) => {
  const allMovies = database.movies;

  return response.status(getStatusCode('OK')).json(allMovies)
}

const getMovie = (request, response) => {
  const { name } = request.query;

  const movieFound = database.movies.find((movie) => formatterStringForSearching(movie.name) === formatterStringForSearching(name));

  const movieDoesNotExist = !movieFound;

  if (movieDoesNotExist) {
    response.status(getStatusCode('Bad Request')).json({ message: "Movie does not exist!" })
  }

  return response.status(getStatusCode('OK')).json(movieFound)
}

const createMovie = (request, response) => {
  const { name, year } = request.body;

  const movieFound = database.movies.find((movie) => formatterStringForSearching(movie.name) === formatterStringForSearching(name));

  if (movieFound) {
    response.status(getStatusCode('Bad Request')).json({ message: "Movie already exist!" })
  }

  database.movies.push({ name, year })

  return response.status(getStatusCode('Created')).send()
}

module.exports = {
  getMovies,
  getMovie,
  createMovie
}