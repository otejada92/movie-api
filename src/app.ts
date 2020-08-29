import express, {Request, Response, Application } from 'express';
import { debugLogger, errorLogger } from './common/logger/config';
import db from './database/db-instance';
import errorRequestHandler from './middleware/error-request-handler';

class App {
    
    public app: Application;
    public port: number;

    constructor(port: number,controllers: any[]){

        this.app = express();
        this.port = port;

        this.app.use(debugLogger);
        this.app.use(express.json());
        this.initRoutes(controllers);
        this.app.use(errorLogger);
        this.app.use(errorRequestHandler)
    }

    public start(){
        this.listen();
    }

    private listen() {
        this.app.listen(this.port, () => {
          console.log(`App listening on port ${this.port}`);
          
          this.connectDb();
        });
    }

    private initRoutes(controllers: any[]) {
        
        this.app.get('/', (req: Request, res: Response) => {
                res.redirect('/api/v1/movies');
        });

        controllers.forEach((controller: any) => {
                  this.app.use('/api/v1/movies', controller.router);
        });

        this.app.get('*',  (req: Request, res: Response) => res.sendStatus(404));
    }

    private connectDb(){
        db.sequelize.authenticate().then(result => {
            console.log('Connected to the database');
        }).catch(err => console.log(err));
    }
}

export default App;