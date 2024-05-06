// // src/pages/CourseDetailsPage.tsx
// import React, { useState, useEffect } from 'react';
// import CourseDetails from '../components/CourseDetails';
// import { useParams } from 'react-router-dom';
// import { fetchCourses } from '../api';

// const CourseDetailsPage: React.FC = () => {
//   const [course, setCourse] = useState<any>(null);
//   const { id } = useParams<{ id: string }>();

//   useEffect(() => {
//     async function loadCourse() {
//       try {
//         const courses = await fetchCourses();
//         const foundCourse = courses.find((course: any) => course.id === Number(id));
//         setCourse(foundCourse);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     loadCourse();
//   }, [id]);

//   if (!course) return <div>Loading...</div>;

//   return (
//     <div>
//       <h2>Course Details</h2>
//       <CourseDetails course={course} />
//     </div>
//   );
// };

// export default CourseDetailsPage;


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CourseDetails from '../components/CourseDetails';
import { fetchCoursesAsync } from '../state/courses/coursesSlice';
import { AppDispatch, RootState } from '../state/store';

const CourseDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const courses = useSelector((state: RootState) => state.coursesSlice);
  const dispatch = useDispatch<AppDispatch>();


  useEffect(() => {
    if (!courses || courses.length === 0) {
      dispatch(fetchCoursesAsync());
    }
  }, [dispatch]);

  const course = courses.find((course: Course) => course.id === Number(id));

  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <h2>Course Details</h2>
      <CourseDetails course={course} />
    </div>
  );
};

export default CourseDetailsPage;
