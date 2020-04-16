const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const MoviesRouter = require('./server/movies/routes.config');

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  return next();
});

// create routes
MoviesRouter.routesConfig(app);
