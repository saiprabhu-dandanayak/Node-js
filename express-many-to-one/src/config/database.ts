import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  database: 'many_to_one_db',
  dialect: 'mysql',
  username: '*****',
  password: '****',
  models: [__dirname + '/../models'], 
});

export default sequelize;