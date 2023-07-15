const { insertUsersAndTweets } = require('./practices');

(async () => {
  try {
    insertUsersAndTweets();
  } catch (error) {
    console.log('======= error ======');
    console.log(error);
  }
})();
