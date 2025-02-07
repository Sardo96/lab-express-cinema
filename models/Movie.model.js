const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
});

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;