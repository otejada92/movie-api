import { QueryInterface, DataTypes } from 'sequelize';
import * as data from './movie-books.json';

export const up = async (query: QueryInterface) => {
    
    try{
        return query.bulkInsert('Movies', data.movies);
    }catch(e){
        return Promise.reject(e);
    }
};

export const down = async (query: QueryInterface) => {
    
    try {
      return query.bulkDelete('Movies', {});
    } catch (e) {
      return Promise.reject(e);
    }
};