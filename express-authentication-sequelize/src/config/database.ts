import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/userModel';
import dotenv from 'dotenv';


dotenv.config({ override: true });

const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME,
  dialect: process.env.DIALECT as 'mysql',
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: Number(process.env.PORT),
  models: [User],
});

export default sequelize;
