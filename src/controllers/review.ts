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
            
            const reviews = await Review.findAll(filter);
            
            if (reviews) return response.status(200).json(reviews);
            
           return  response.status(404).json({msg : 'Resource not found.'});
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
            const newReview: ReviewAttributes = request.body;

            const existMovie = await Movie.findOne({where : {id : +id}});
        
            if(existMovie){
                const review = await Review.create(newReview);
                return response.status(201).json(review);
            }

            return response.status(204).json({msg: 'Resource not created'});
        }catch(err){
            next(err);
        }

    }
}

export default ReviewsController;