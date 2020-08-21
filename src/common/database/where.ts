import { removeUndefined } from "../../utils/cleaner";
import {Request} from 'express';

/**
 * @description Build the Where statement base on model filters
 */
export const where = new class WhereManager {
 
    /**
     * @description Get the where statement 
     * 
     * @param req client request
     * @param modelFilters Filters allowed by Model
     */
    public getWhereStatement = (req: Request, modelFilters: string[]): object => {

        const whereStatement = this.buildWhereStatement(req, modelFilters);
    
        return {...whereStatement};
    }

    /**
     * @description Build where statement object
     * 
     * @param req client request
     * @param modelFilters Filters allowed by Model
     */
    private buildWhereStatement(req: Request, modelFilters: string[]): object{
        
        const query = { };

        modelFilters.forEach(filter => {
            
            let value;

            if (filter == 'visible') {
                value = this.getVisibleValue(req.query[filter]);
            }else{ 
                value = req.query[filter];
            }
            
            Object.assign(query, {[filter]: value});

        });

        return { where: removeUndefined(query) };
    }

    private getVisibleValue(value: any){

        if(!value)
            return true;

        if (['true', 'false'].includes(value))
            return (value == 'true') ? true : false;

        return true;
    }
}


