import express, {Request, Response}  from 'express';
import { Movie } from '../models';
import { query } from '../common/database/query';
import MovieAttributes from '../interfaces/movie.interface';

class MoviesController {
    
    public path = '/';
    public router = express.Router();
    public modelFilters: string[] = ['title', 'director', 'visible', 'writer']
    
    constructor() {
        this.initRoutes();
    }
 
    private initRoutes() {
        this.router.get(this.path, this.getMovies);
        this.router.get(`${this.path}:id`, this.getMovie);
        this.router.post(this.path, this.createMovie);
        this.router.put(`${this.path}:id`, this.updateMovie);
    }
    
    /**
     * @route GET /api/v1/movies/
     */
    getMovies = async (request: Request, response: Response, next: any) => {
        

        try{
            const whereStatement = query.getWhereStatement(request, this.modelFilters);
            const orderStatement = query.getDataOrder(request);
            const pagination = query.getPagination(request);

            
            const filters = { 
                ...whereStatement,
                ...pagination,
                ...orderStatement,
            };
            
            const movies = await Movie.findAll(filters);
            
            if(movies) return response.status(200).json(movies);
           
           return response.status(400).json({mgs: 'Resource not found.'});

        }catch(err){
            next(err);
        }
    }

    /**
     * @route GET /api/v1/movies/:id
     */
    getMovie = async (request: Request, response: Response, next: any) => {

        try{
            const { id } = request.params;

            const movie = await Movie.findByPk(id);
            
            if(movie) return response.json(movie);

           return  response.json({mgs: `No movie found w/ id: ${id}.`})

        }catch(err){
            next(err);
        }
    };
    
    /**
     * @route POST /api/v1/movies/
     */
    createMovie = async (request: Request, response: Response, next: any) => {
        
        try{
            const movie: MovieAttributes = request.body;
            
            const newMovie = await Movie.create(movie);
            
            if(newMovie) return response.status(201).json(newMovie);

            return response.status(400).json({msg: 'Resource not created.'});

        }catch(err){
            next(err);
        }
    };
    
    /**
     * @route PUT /api/v1/movies/:id
     */
    updateMovie = async (request: Request, response: Response, next: any) => {

        try{
            const { id } = request.params;
    
            const whereStatement = { where : { id } };

            const updateResponse = await Movie.update({visible: false}, whereStatement)
            
            return response.json(updateResponse);

        }catch(err){
            next(err);
        }
    }
}

export default MoviesController;