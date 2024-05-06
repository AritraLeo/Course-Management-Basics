import { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../state/store';
import { markCourseCompleted } from '../state/courses/coursesSlice';
// import { markCourseCompleted } from '../state/courses/coursesSlice';

const CourseCard = ({  course }: { course: Course  }) => {
  const [progress, setProgress] = useState(course.progress || 0); // Initialize progress
  const dispatch = useDispatch<AppDispatch>();

  const handleMarkComplete = () => {
    // Update the progress to 100% and dispatch the action to update the Redux store
    setProgress(100);
    dispatch(markCourseCompleted(course.id));
  };

  return (
    <div className="course-card">
      <img src={course.thumbnail} alt={course.name} />
      <h3>{course.name}</h3>
      <p>Instructor: {course.instructor}</p>
      <ProgressBar now={progress} label={`${progress}%`} />
      {course.completed ? (
        <p>Completed</p>
      ) : (
        <button onClick={handleMarkComplete}>Mark Completed</button>
      )}
    </div>
  );
};

export default CourseCard;
