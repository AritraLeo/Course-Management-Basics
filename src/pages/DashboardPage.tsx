// src/pages/DashboardPage.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/types';
import { markCourseCompleted } from '../store/actions';

const DashboardPage: React.FC = () => {
  const courses = useSelector((state: RootState) => state.courses);
  const dispatch = useDispatch();

  const handleCourseCompletion = (id: number) => {
    dispatch(markCourseCompleted(id));
  };

  return (
    <div>
      <h2>Student Dashboard</h2>
      <ul>
        {courses.map((course: Course) => (
          <li key={course.id}>
            <div>
              <h3>{course.name}</h3>
              <p>Instructor: {course.instructor}</p>
              <img src={course.thumbnail} alt={course.name} />
              <p>Due Date: {course.dueDate}</p>
              <progress value={course.progress} max="100" />
              {course.completed ? (
                <p>Completed</p>
              ) : (
                <button onClick={() => handleCourseCompletion(course.id)}>Mark as Completed</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardPage;
