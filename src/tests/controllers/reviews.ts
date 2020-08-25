import chai,{expect} from 'chai';
import App from '../../app';
import chaiHttp = require('chai-http');
import ReviewsController from '../../controllers/review';
import { Review, Movie } from '../../models';
import { dummyMovie, dummyReview } from '../dummy-data';
import { createMovieReview, 
    createData, 
    deleteMovieByTitle, 
    findOneMovieByTitle } from '../../utils/dao';

const controller: any[] = [
    new ReviewsController
];

const app = new App(Number(process.env.SERVER_PORT), controller).app;
chai.use(chaiHttp);

before(async () => {
    const movie = await createData(Movie, dummyMovie);
    await createMovieReview(Review, {...dummyReview, movie_id : +movie.id });
});

describe('/GET Reviews', () => { 


    it('should GET reviews from a movie', async () => { 

        const movie = await findOneMovieByTitle(Movie, 'Mocha test data');
        
        const response = await chai.request(app)
                                    .get(`/api/v1/movies/${movie.id}/reviews`)
        
            
        expect(response).to.have.status(200);
        expect(response.body).be.a('array');
    });
});

describe('/POST Review', () => { 
    
    it('should POST a review', async () => {

        const movie = await findOneMovieByTitle(Movie, 'Mocha test data');

        const response = await chai.request(app)
                                    .post(`/api/v1/movies/${movie.id}/reviews`)
                                    .send({
                                        "movie_id" : movie.id,
                                        "comment" : "Mocha movie review POST",
                                        "rate" : "3.5"
                                    })

        expect(response).to.have.status(201);
        expect(response.body.comment).to.eq('Mocha movie review POST');
    });

    it('should not POST an empty review', async () => { 

        const movie = await findOneMovieByTitle(Movie, 'Mocha test data');
        const response = await chai.request(app)
                            .post('/api/v1/movies/1')
                            .send({});

        expect(response).to.have.status(404);
    });
});

after(async ()=>{
    await deleteMovieByTitle(Movie, 'Mocha test data'); 
});