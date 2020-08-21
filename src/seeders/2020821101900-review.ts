import { QueryInterface} from 'sequelize';


export const up = async (query: QueryInterface) => {
    
    try{
        return query.bulkInsert('Reviews', [
          {
            comment: 'Good stuff',
            movie_id: 1,
            rate: 5.5,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ]);  
    }catch(e){
        return Promise.reject(e);
    }
};

export const down =  async (query: QueryInterface) => {
    

    try {
      return query.bulkDelete('Reviews', {});
    } catch (e) {
      return Promise.reject(e);
    }
}