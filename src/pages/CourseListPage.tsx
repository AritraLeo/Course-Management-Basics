// // src/pages/CourseListPage.tsx
// import React, { useState, useEffect } from 'react';
// import CourseList from '../components/CourseList';
// import { fetchCourses } from '../api';
// import { useSelector } from 'react-redux';
// import { AppDispatch, RootState, useAppDispatch } from '../state/store';
// import { selectCourses } from '../state/courses/coursesSlice';

// const CourseListPage = () => {
//   // const [courses, setCourses] = useState<Course[]>([]);
//   const [courses, setCourses] = useSelector(selectCourses);
//   const dispatch = useAppDispatch<AppDispatch>()
//   const [search, setSearch] = useState('');

//   // useEffect(() => {
//   //   async function loadCourses() {
//   //     try {
//   //       const data = await fetchCourses();
//   //       setCourses(data);
//   //     } catch (error) {
//   //       console.error(error);
//   //     }
//   //   }
//   //   loadCourses();
//   // }, []);

//   const filteredCourses: Course[] = courses.filter((course: Course) =>
//     course.name.toLowerCase().includes(search.toLowerCase()) ||
//     course.instructor.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div>
//       <h2>Course List</h2>
//       <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." />
//       <CourseList courses={filteredCourses} />
//     </div>
//   );
// };

// export default CourseListPage;


import React, { useState, useEffect } from 'react';
import CourseList from '../components/CourseList';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../state/store';
import { fetchCoursesAsync } from '../state/courses/coursesSlice';

const CourseListPage = () => {
  const courses = useSelector((state: RootState) => state.coursesSlice);
  const dispatch = useDispatch<AppDispatch>();
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!courses || courses.length === 0) {
      dispatch(fetchCoursesAsync());
    }
  }, [courses, dispatch]);

  const filteredCourses: Course[] = courses.filter((course: Course) =>
    course.name.toLowerCase().includes(search.toLowerCase()) ||
    course.instructor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Course List</h2>
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." />
      <CourseList courses={filteredCourses} />
    </div>
  );
};

export default CourseListPage;
