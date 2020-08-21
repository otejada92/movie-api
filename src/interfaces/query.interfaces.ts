import { Request } from 'express';

interface Query {
    getWhereStatement(req: Request|any, modelFilters: []): object;
    getPagination(req: Request|any): object;
    getDataOrder(req: Request|any): object;
}

export default Query;