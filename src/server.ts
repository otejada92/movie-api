import App from './app';
import MoviesController from './controllers/movie';
import ReviewsController from './controllers/review';

import * as dotenv from "dotenv";
import path from 'path';

dotenv.config({ path:  path.resolve(process.cwd(), '.env')});

const controllers: any[] = [
    new MoviesController,
    new ReviewsController
] 

const app = new App(Number(process.env.SERVER_PORT), controllers);

app.start();
