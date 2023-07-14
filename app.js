const { sequelize, Movie } = require('./models');

const movies = require('./data/movie.json');

function insertData() {
  const moviesPromise = movies.map((movie) =>
    Movie.create({
      title: movie.title,
      titleYear: movie.title_year,
      directorName: movie.director_name,
      actor1Name: movie.actor_1_name,
      actor2Name: movie.actor_2_name,
      duration: movie.duration,
      country: movie.country,
      contentRating: movie.content_rating,
      gross: movie.gross,
      imdbScore: movie.imdb_score,
    })
  );

  return Promise.all(moviesPromise);
}

(async () => {
  try {
    await insertData();

    const movies = await Movie.findAll({
      limit: 10,
      order: [['imdbScore', 'DESC']],
    });

    movies.forEach((movie) => {
      console.log(
        `title=${movie.title}, director name=${movie.directorName}, imdb score=${movie.imdbScore}`
      );
    });
  } catch (error) {
    console.log('======= error ======');
    console.log(error);
  }
})();
