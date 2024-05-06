import { useState, useEffect } from 'react';
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

  console.log(courses);
  
  const filteredCourses: Course[] = courses.filter((course: Course) =>
    course.name.toLowerCase().includes(search.toLowerCase()) ||
    course.instructor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{
        fontSize: '24px',
        color: '#333',
        marginBottom: '20px'
      }}>Course List</h2>
      <input
        style={{
          width: '30%',
          padding: '10px',
          marginBottom: '20px',
          border: '1px solid #ccc',
          borderRadius: '30px'
        }}
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        justifyContent: 'center'
      }}>
        <CourseList courses={filteredCourses} />
      </div>
    </div>
    
  );
};

export default CourseListPage;
