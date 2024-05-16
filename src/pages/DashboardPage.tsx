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
  }, [studentDetails, dispatch]);

  console.log(studentDetails);
  console.log(courses);
  console.log(enrolledCourses);



  return (
    // <div className="dashboard">
    //   <h2>My Courses</h2>
    //   {enrolledCourses.map((course) => (
    //     <CourseCard key={course.id} course={course} />
    //   ))}
    // </div>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginTop: '20px'
    }}>
      <h2 style={{
        fontSize: '24px',
        color: '#333',
        marginBottom: '20px'
      }}>My Courses</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        width: '100%'
      }}>
        {enrolledCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>

  );
};

export default Dashboard;
