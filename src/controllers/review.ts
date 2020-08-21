import {Review, Movie } from '../models';
import express from 'express';
import ReviewAttributes from '../interfaces/review.interface';
import { query } from '../common/database/query';

class ReviewsController {

    public path = 'reviews';
    public router = express.Router();

    constructor(){

        this.initRoutes();
    }

    private initRoutes(){
        this.router.get(`/:id/${this.path}`, this.getReviews);
        this.router.post(`/:id/${this.path}`, this.createReview);
    }

    /**
     * @route GET /api/v1/movies/:id/reviews
     */
    getReviews = async (request: express.Request, response: express.Response, next: any) => {

        try{
            
            const { id } = request.params;    
            
            const orderStatement = query.getDataOrder(request);
            const pagination = query.getPagination(request);
    
            const filter = { 
                where : { movie_id : id },
                ...orderStatement,
                ...pagination
            }
            
            const findResponse = await Review.findAll(filter);
            
            if (findResponse) return response.status(200).json(findResponse);
            
           return  response.status(400).json({msg : 'Resource not found.'});
        }catch(err){
            next(err);
        }
    };
    
    /**
     * @route POST /api/v1/movies/:id/reviews
     */
    createReview = async (request: express.Request, response: express.Response, next: any) => {
        
        try{
            
            const { id } = request.params;  
            const review: ReviewAttributes = request.body;

            const movieResponse = await Movie.findOne({where : {id : +id}});
        
            if(movieResponse){
                const reviewResponse = await Review.create(review);
                return response.status(201).json(reviewResponse);
            }

            return response.status(400).json({msg: 'Resource not created'});
        }catch(err){
            next(err);
        }

    }
}

export default ReviewsController;