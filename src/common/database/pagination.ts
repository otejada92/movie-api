import  {Request} from 'express';

/**
 * @description Build the pagination parameters
 */
export const pagination  = new class PaginationManager {

    /**
     * @description Calculate pagination parameters
     * 
     * @param req client request
     */
    calculate = (req: Request): object  => {
        

        const pageSize = (req.query.pageSize) ? +req.query.pageSize : 20;
        const page = (req.query.page) ? +req.query.page : 0;

        const offSet = page * pageSize;
        const limit = pageSize; 

        const pagination = {limit, offset: offSet};
    
        return pagination;
    }

}