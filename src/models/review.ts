import { Model, DataTypes, Optional} from 'sequelize';
import db from '../database/db-instance';
import ReviewAttributes from '../interfaces/review.interface';


interface ReviewCreationAttributes extends Optional<ReviewAttributes, "id"> {}

export interface ReviewInstance extends Model<ReviewAttributes, ReviewCreationAttributes>,
  ReviewAttributes {}

export const Review = db.sequelize.define<ReviewInstance>('Review', {
    id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    movie_id: {
        type: DataTypes.INTEGER,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: false
        }
    },
    rate: DataTypes.FLOAT,
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
});
