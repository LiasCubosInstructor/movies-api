const express = require('express');
const { standAlive } = require('./controllers/index.controller');
const { getMovies, getMovie, createMovie } = require('./controllers/movies.controller');
const { validateQueryParamsForMovies } = require('./middlewares/validate-query-params.middleware')
const {validateBodyForCreateMovies} = require('./middlewares/validate-body.middleware')

const routes = express();

routes.get('/', standAlive)

// Movies
routes.get('/movies', getMovies)
routes.get('/movie', validateQueryParamsForMovies, getMovie)
routes.post('/movie', validateBodyForCreateMovies, createMovie)

module.exports = routes;