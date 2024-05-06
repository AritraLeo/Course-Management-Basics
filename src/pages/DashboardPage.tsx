import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import CourseCard from "../components/CourseCard";
import { fetchCoursesAsync } from "../state/courses/coursesSlice";
import { fetchStudentAsync } from "../state/student/studentSlice";

const Dashboard = () => {
  const courses = useSelector((state: RootState) => state.coursesSlice);
  const studentDetails = useSelector((state: RootState) => state.studentSlice);
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([])
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!courses || courses.length === 0) {
      dispatch(fetchCoursesAsync());
    }

    if (studentDetails != null) {
      dispatch(fetchStudentAsync());
    }

    if (studentDetails && studentDetails.coursesEnrolled) {
      console.log("Student details:", studentDetails);
      console.log("Courses enrolled:", studentDetails.coursesEnrolled);
      setEnrolledCourses(
        courses.filter((course) => studentDetails.coursesEnrolled.includes(course.id))
      );
    } else {
      console.log("Student details or coursesEnrolled is undefined");
      setEnrolledCourses([]);
    }
  }, [dispatch]);

  console.log(studentDetails);
  console.log(courses);
  console.log(enrolledCourses);
  


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
