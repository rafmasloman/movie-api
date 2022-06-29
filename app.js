const express = require('express');
const bodyParser = require('body-parser');
const {
  getAllMovies,
  findMovie,
  insertMovie,
} = require('./controllers/MovieController');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    message: 'index',
  });
});

app.get('/search/movie', findMovie);
app.get('/movies', getAllMovies);
app.post('/add', insertMovie);

app.listen(3000, () => {
  console.log('server berjalan');
});
