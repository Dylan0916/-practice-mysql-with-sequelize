const { join } = require('./practices');

(async () => {
  try {
    join();
  } catch (error) {
    console.log('======= error ======');
    console.log(error);
  }
})();
