const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", async (req, res, next) => {
    try {
      const moviesFromDB = await Movie.find();
      console.log(moviesFromDB);
      res.render("movies", { movies: moviesFromDB });
    } catch (error) {
      next(error);
    }
  });
  
  router.get("/movies/:id", async (req, res, next) => {
    try {
      const movieId = req.params.id;
      const movieFromDB = await Movie.findById(movieId);
      res.render("movie-details", { movie: movieFromDB });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;
