import chai,{expect} from 'chai';
import App from '../../app';
import MoviesController from '../../controllers/movie';
import chaiHttp = require('chai-http');
import { createData, findOneMovieByTitle, deleteMovieByTitle, deleteResourceById

        } from '../common/common';
import { Movie} from '../../models';
import { dummyMovie } from '../common/dummy-data';

const controller: any[] = [
    new MoviesController
];

const app = new App(Number(process.env.SERVER_PORT), controller).app;
chai.use(chaiHttp);


before(async ()=>{
    await createData(Movie, dummyMovie);
});

describe('/GET Movies', () => { 
    
    it('should GET all the movies', async () => {
        
        try {
            const response  = await chai.request(app).get('/');

            expect(response.body).be.a('array');
            expect(response).to.have.status(200);
            
        }catch(err){
            throw err;
        }
    });
});

describe('/GET Movie', () => { 
    
    it('should GET one movie', async () => { 

        try{
            const movie = await findOneMovieByTitle(Movie, 'Mocha test data');

            const response = await chai.request(app).get(`/api/v1/movies/${movie?.id}`);
        
            expect(response.body).be.a('object');
            expect(response).to.have.status(200);
            expect(response.body).have.property('id');

        }catch(err) {
            throw err;
        }


    });

});

describe('/POST Movie', () => { 
    
    it('should POST a movie', async () => { 

        try{
            
           const response = await chai.request(app)
                .post('/api/v1/movies')
                .send({
                    title: "Mocha test data REQUEST POST",
                    synopsis: "A cat story",
                    director: "King mun",
                    writer: "Typo Lin",
                });
                
                expect(response).to.have.status(201);
                expect(response.body.title).to.eql('Mocha test data REQUEST POST');
                
                deleteResourceById(Movie, +response.body.id);
        }catch(err){
            throw err;
        }
    });

    it('should not POST an empty movie', async () => { 
        
        try{
            const response = await chai.request(app)
                                        .post('/api/v1/movies')
                                        .send({});

            expect(response).to.have.status(500);
        }catch(err){
            throw err;
        }
    });
});

describe('/PUT Update visible property of a Movie', () => { 
    
    
    it('should PUT visible false', async () => { 
        
        try {
            
            let movie = await findOneMovieByTitle(Movie, 'Mocha test data');

            const response = await chai.request(app).put(`/api/v1/movies/${movie?.id}`);
            expect(response).to.have.status(200);

            movie = await findOneMovieByTitle(Movie, 'Mocha test data');
            expect(movie?.visible).to.be.eq(false);

        }catch(err){
            throw err;
        }     

    });
});

after(async ()=>{
    await deleteMovieByTitle(Movie, 'Mocha test data');
});