import { QueryInterface, DataTypes } from 'sequelize';

export const up = async (query: QueryInterface) => {
    
    try{
        return query.createTable('Movies', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: DataTypes.INTEGER
            },
            title: {
              type: DataTypes.STRING,
              allowNull: false
            },
            synopsis: {
              type: DataTypes.STRING
            },
            director: {
              type: DataTypes.STRING
            },
            writer: {
              type: DataTypes.STRING
            },
            visible: {
              type: DataTypes.BOOLEAN,
              defaultValue: 1
            },
            createdAt: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.NOW
            },
            updatedAt: {
              allowNull: false,
              type: DataTypes.DATE,
              defaultValue: DataTypes.NOW
            }
          });
    }catch(e){
        return Promise.reject(e);
    }
};

export const down = async (query: QueryInterface) => {
    
    try {
      return query.dropTable('Movies');
    } catch (e) {
      return Promise.reject(e);
    }
};