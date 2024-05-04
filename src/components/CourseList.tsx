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
    <ul>
      {courses.map(course => (
        <li key={course.id}>
          <Link to={`/course/${course.id}`} onClick={() => selectCourse(course)}>
            <h3>{course.name}</h3>
            <p>Instructor: {course.instructor}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
