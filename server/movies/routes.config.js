const MoviesController = require('../controllers/movies.controller');

exports.routesConfig = function (app) {
    app.get('/list', [
        MoviesController.list
    ]);
    app.get('/search/:searchTerm', [
        MoviesController.search
    ]);
    app.get('/movies/:movieId', [
        MoviesController.getByIdFromApi
    ]);
    app.get('/movie/:movieId/credits', [
        MoviesController.getCredits
    ]);
    app.get('/movie/:movieId/similar', [
        MoviesController.getRelated
    ]);
};