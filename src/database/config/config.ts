import * as dotenv from "dotenv";
import path from 'path';

dotenv.config({ path:  path.resolve(process.cwd(), '.env')});

export const development = {
      username: String(process.env.DB_DEV_USER),
      password: process.env.DB_DEV_PASSWORD,
      database: String(process.env.DB_DEV_DATABASE),
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      logging: false
}

export const test = {
    username: String(process.env.DB_TEST_USER),
    password: process.env.DB_TEST_PASSWORD,
    database: String(process.env.DB_TEST_DATABASE),
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    logging: false
}
