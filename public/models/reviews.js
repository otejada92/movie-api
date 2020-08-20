'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Movies, {
        foreignKey: 'id',
        onDelete: 'CASCADE'
      });
    }
  };
  reviews.init({
    movie_id: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    rate: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Reviews',
  });
  return reviews;
};