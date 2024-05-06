// src/components/CourseList.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

interface Props {
  courses: Course[];
}

const CourseList: React.FC<Props> = ({ courses }) => {
  const dispatch = useDispatch();

  const selectCourse = (course: Course) => {
    dispatch({ type: 'SET_COURSE', payload: course });
  };

  return (
    // <ul>
    //   {courses.map(course => (
    //     <li key={course.id}>
    //       <Link to={`/course/${course.id}`} onClick={() => selectCourse(course)}>
    //         <h3>{course.name}</h3>
    //         <p>Instructor: {course.instructor}</p>
    //       </Link>
    //     </li>
    //   ))}
    // </ul>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
      justifyContent: 'center',
      padding: '20px'
    }}>
      {courses.map(course => (
        <div key={course.id} style={{
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          cursor: 'pointer'
        }}>
          <Link to={`/course/${course.id}`} onClick={() => selectCourse(course)} style={{
            display: 'block',
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <img src={course.thumbnail} alt={course.name} style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover'
            }} />
            <div style={{
              padding: '16px'
            }}>
              <h3 style={{
                fontSize: '18px',
                color: '#333',
                marginBottom: '8px'
              }}>{course.name}</h3>
              <p style={{
                color: '#666',
                marginBottom: '0'
              }}>Instructor: {course.instructor}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
    
  );
};

export default CourseList;
