import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";
import { Course } from "./Course";
import { StudentCourse } from "./StudentCourse";

@Table
export class Student extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @BelongsToMany(() => Course, () => StudentCourse)
  courses!: Course[];
}
