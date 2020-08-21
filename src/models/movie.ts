import { Model, DataTypes, Optional} from 'sequelize';
import db from '../database/db-instance';
import {Review} from './review';
import MovieAttributes from '../interfaces/movie.interface';

interface MovieCreationAttributes  extends Optional<MovieAttributes, "id"> {};

interface MovieInstance extends Model<MovieAttributes, MovieCreationAttributes>,
  MovieAttributes {}

export const Movie = db.sequelize.define<MovieInstance>('Movies', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: false
        }
    },
    synopsis: DataTypes.STRING,
    director: DataTypes.STRING,
    writer: DataTypes.STRING,
    visible: DataTypes.BOOLEAN,
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

Movie.hasMany(Review, {
    sourceKey: "id",
    foreignKey: "movie_id",
    as: "review"
});
