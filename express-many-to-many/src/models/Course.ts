import { Table, Column, Model, DataType, BelongsToMany } from 'sequelize-typescript';
import { Student } from './Student';
import { StudentCourse } from './StudentCourse';

@Table
export class Course extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @BelongsToMany(() => Student, () => StudentCourse)
  students!: Student[];
}
