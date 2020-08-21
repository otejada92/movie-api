import { QueryInterface, DataTypes } from 'sequelize';

export const up = async (query: QueryInterface) => {
    
    try{
        return  query.createTable('Reviews', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: DataTypes.INTEGER
            },
            movie_id: {
              type: DataTypes.INTEGER
            },
            comment: {
              type: DataTypes.STRING
            },
            rate: {
              type: DataTypes.FLOAT
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

export const down =  async (query: QueryInterface) => {
    
    try {
      return query.dropTable('Reviews');
    } catch (e) {
      return Promise.reject(e);
    }
}