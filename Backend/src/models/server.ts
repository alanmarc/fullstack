import express, { Application} from 'express';
import cors from 'cors';
import db from '../db/connection';
import { config } from '../config';
import { graphqlHTTP } from 'express-graphql';
import UserSchema from '../schemas/user';

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/graphql'
    }
    constructor() {
        this.app = express();
        this.port = config.port
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
          await db.authenticate();
          console.log('Database online');
        } catch(error) {
          throw new Error();
        }
      }

    middlewares() {
        this.app.use( cors() );
        this.app.use(express.json());
        this.app.use(express.static('public'));
        
      }

    routes() {
        this.app.use(this.apiPaths.users, graphqlHTTP({
          schema: UserSchema,
          graphiql: true,
        }) )
      }

    listen() {
        this.app.listen(this.port, () => {
          console.log(`Servidor Corriendo en puerto -> http://localhost:${this.port}`)
        })
      }

}

export default Server;