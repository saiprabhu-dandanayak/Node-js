import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Course } from './Course';
import { Student } from './Student';


@Table
export class StudentCourse extends Model {
  @ForeignKey(() => Student)
  @Column
  studentId!: number;

  @ForeignKey(() => Course)
  @Column
  courseId!: number;
}
