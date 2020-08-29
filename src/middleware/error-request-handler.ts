import { NextFunction, Request,Response } from "express";

let errorRequestHandler: (err: any, req: Request, res: Response, next: NextFunction) => any;

export default errorRequestHandler = (err: any, request: Request, response: Response, next: NextFunction) => {
    
    const status = err.status || 500;
    const message = err.message || 'Something went wrong';
    
    response
        .status(status)
        .json({
            status,
            message,
    });
};