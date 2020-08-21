import {Request} from 'express';
import { where } from './where';
import { order } from './order';
import { pagination } from './pagination';
import Query from "../../interfaces/query.interfaces";

/**
 * @description Manage the client request parameters 
 * 
 * @example filters aka where statement, pagination, and order
 */
export const query = new class QueryManager implements Query {
    
    getWhereStatement(req: Request|any, modelFilters: string[]): object {
        return where.getWhereStatement(req, modelFilters);
    }
    getPagination(req: Request|any): object {
        return pagination.calculate(req);
    }
    getDataOrder(req: Request|any): object {
        return order.getOrder(req);
    }
}