import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize({
  database: "prabhu",
  dialect: "mysql",
  username: "root",
  password: "admin",
  host: "localhost",
  port: 3306,
  models: [User],
});

sequelize.sync();

export default sequelize;
