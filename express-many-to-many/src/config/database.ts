import { Sequelize } from "sequelize-typescript";
import { Course } from "../models/Course";
import { Student } from "../models/Student";
import { StudentCourse } from "../models/StudentCourse";

const sequelize = new Sequelize({
    database: 'many_to_many_db',
    dialect: 'mysql',
    username: '****',
    password: '****',
    models: [Student, Course, StudentCourse], 
    logging: false,
});

export const connectDB = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Database connected and tables synced!");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
};

export default sequelize;
