const { Sequelize, sequelize, Movie, User, Tweet } = require('./models');

const movies = require('./data/movie.json');

const print = (data) => JSON.stringify(data, null, 4);

exports.insertMovies = () => {
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
};

exports.insertUsersAndTweets = async () => {
  const users = [
    { username: 'test1', password: 'test1', email: 'test1@test1.com' },
    { username: 'test2', password: 'test2', email: 'test2@test2.com' },
  ];
  const tweets = [
    { tweet: 'this is test1', userId: 1 },
    { tweet: 'this is test2', userId: 2 },
    { tweet: 'this is test2 again', userId: 2 },
    { tweet: 'this is test2 again again', userId: 2 },
  ];

  await Promise.all(users.map((user) => User.create(user)));
  await Promise.all(tweets.map((tweet) => Tweet.create(tweet)));
};

exports.countAndDistinct = async () => {
  console.log('===== 1 ======');
  const { count: count1 } = await Movie.findAndCountAll({
    where: {
      directorName: 'Christopher Nolan',
    },
  });

  console.log(count1);

  console.log('===== 2 ======');
  const { count: count2 } = await Movie.findAndCountAll({
    where: {
      [Sequelize.Op.or]: [
        { actor1Name: 'Tom Hardy' },
        { actor2Name: 'Tom Hardy' },
      ],
    },
  });

  console.log(count2);

  console.log('===== 3 ======');
  const movies = await Movie.findAll({
    attributes: [sequelize.fn('DISTINCT', sequelize.col('directorName'))],
  });

  console.log(movies.length);
};

exports.groupBy = async () => {
  console.log('===== 1 ======');

  const movies1 = await Movie.findAll({
    attributes: [
      'directorName',
      [sequelize.fn('COUNT', sequelize.col('title')), 'titleCount'],
    ],
    group: 'directorName',
    order: [['titleCount', 'DESC']],
    limit: 10,
  });

  console.log(print(movies1));

  console.log('===== 2 ======');

  const movies2 = await Movie.findAll({
    attributes: [
      'directorName',
      [sequelize.fn('SUM', sequelize.col('gross')), 'grossSum'],
    ],
    group: 'directorName',
    order: [['grossSum', 'DESC']],
    limit: 10,
  });

  console.log(print(movies2));
};
