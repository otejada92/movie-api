import { Request } from 'express';
import { isUndefined } from "lodash";

/**
 * @description Build the Order statement
 */
export const order = new class OrderManager {
    
    /**
     * @description Get the data order parameters
     * 
     * @param req client request
     */
    getOrder = (req: Request): object => {
    
        const { sortBy, orderBy} = req.query;

        const orderValues = [sortBy, orderBy].filter(value => !isUndefined(value));
        const orderStatement = orderValues.length > 0 ? { order : [orderValues]} : { order : []};
        
        return orderStatement;
    }

} 