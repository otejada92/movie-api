import express, { Request, Response } from 'express';
import db from './database/db-instance';

class App {
    
    public app: express.Application;
    public port: number;

    constructor(port: number,controllers: any[]){

        this.app = express();
        this.port = port;

        this.initMiddlerWares();
        this.initRoutes(controllers);
    }

    public start(){
        this.listen();
    }

    public initMiddlerWares(){
        this.app.use(express.json());
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