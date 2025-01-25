import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  database: 'one_to_one_db',
  dialect: 'mysql',
  username: '********************************',
  password: '********************************',
  host: 'localhost',
  port: 3306,
  models: [__dirname + '/../models'], 
});

export default sequelize;