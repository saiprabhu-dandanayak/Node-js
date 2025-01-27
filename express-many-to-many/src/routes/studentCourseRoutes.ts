import express from "express";
import {
  createStudent,
  createCourse,
  enrollStudent,
  getStudentCourses,
} from "../controllers/studentCourseController";

const router = express.Router();

router.post("/students", createStudent);
router.post("/courses", createCourse);
router.post("/enroll", enrollStudent);
router.get("/students/:studentId/courses", getStudentCourses);

export default router;
