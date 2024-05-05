import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import CourseCard from "../components/CourseCard";
import { fetchCoursesAsync } from "../state/courses/coursesSlice";
import { fetchStudentAsync } from "../state/student/studentSlice";

const Dashboard = () => {
  const courses = useSelector((state: RootState) => state.coursesSlice);
  const studentDetails = useSelector((state: RootState) => state.studentSlice);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!courses || courses.length === 0) {
      dispatch(fetchCoursesAsync());
    }

    if (!studentDetails) {
      dispatch(fetchStudentAsync());
    }
  }, [courses, studentDetails, dispatch]);

  const enrolledCourses = studentDetails
    ? courses.filter((course) => studentDetails.coursesEnrolled.includes(course.id))
    : [];

  return (
    <div className="dashboard">
      <h2>My Courses</h2>
      {enrolledCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Dashboard;
