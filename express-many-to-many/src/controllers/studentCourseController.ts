import { Request, Response } from "express";
import { Course } from "../models/Course";
import { Student } from "../models/Student";

export const createStudent = async (req: Request, res: Response) => {
  const { name } = req.body;
  const student = await Student.create({ name });
  res.status(201).json(student);
};

export const createCourse = async (req: Request, res: Response) => {
  const { title } = req.body;
  const course = await Course.create({ title });
  res.status(201).json(course);
};

export const enrollStudent = async (req: Request, res: Response) => {
  const { studentId, courseId } = req.body;
  const student = await Student.findByPk(studentId);
  const course = await Course.findByPk(courseId);

  if (student && course) {
    await student.$add("course", course);
    res
      .status(200)
      .json({ message: "Student enrolled in course successfully!" });
  } else {
    res.status(404).json({ message: "Student or Course not found" });
  }
};

export const getStudentCourses = async (req: Request, res: Response) => {
  const { studentId } = req.params;
  const student = await Student.findByPk(studentId, { include: Course });

  if (student) {
    res.status(200).json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
};
