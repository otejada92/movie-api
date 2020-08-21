import { Sequelize } from "sequelize";
import * as config from './config/';
import DatabaseInstance from "../interfaces/database.interface";

let dbConfiguration: any;

if (process.env.NODE_ENV === "dev"){
    dbConfiguration  = config.development; 
}
else dbConfiguration = config.test;

const {database, username, password , host, port} = dbConfiguration
const sequelize = new Sequelize(database, username, password, {
    host,
    port,
    dialect : 'mysql',
});

const db: DatabaseInstance = {sequelize, Sequelize}

export default db;