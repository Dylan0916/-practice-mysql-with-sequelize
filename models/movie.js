'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init(
    {
      title: DataTypes.STRING,
      titleYear: DataTypes.STRING,
      directorName: DataTypes.STRING,
      actor1Name: DataTypes.STRING,
      actor2Name: DataTypes.STRING,
      duration: DataTypes.INTEGER,
      country: DataTypes.STRING,
      contentRating: DataTypes.INTEGER,
      gross: DataTypes.INTEGER,
      imdbScore: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Movie',
    }
  );
  return Movie;
};
