const Movie = require('../models/Movie');
const uuid = require('uuid');
const { Op } = require('sequelize');

const insertMovie = async (req, res) => {
  const { title, sinopsis } = req.body;
  const movie = await Movie.create({
    id: uuid.v1(),
    title,
    sinopsis,
  });

  res.json({
    message: 'Success add movie',
  });
};

const getAllMovies = async (req, res) => {
  const movie = await Movie.findAll();
  res.json(movie);
};

const findMovie = async (req, res) => {
  const { title } = req.body;
  const movie = await Movie.findAndCountAll({
    where: {
      title: {
        [Op.like]: `${title}%`,
      },
    },
  });

  if (movie !== null) {
    res.json(movie.rows);
  } else {
    res.json({
      message: 'Movie not found',
    });
  }
};

// const insertMovies = () => {};
module.exports = { getAllMovies, findMovie, insertMovie };
