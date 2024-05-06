import { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../state/store';
import { markCourseCompleted } from '../state/courses/coursesSlice';
// import { markCourseCompleted } from '../state/courses/coursesSlice';

const CourseCard = ({ course }: { course: Course }) => {
  const [progress, setProgress] = useState(course.progress || 0); // Initialize progress
  const dispatch = useDispatch<AppDispatch>();

  const handleMarkComplete = () => {
    // Update the progress to 100% and dispatch the action to update the Redux store
    setProgress(100);
    dispatch(markCourseCompleted(course.id));
  };

  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '10px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      backgroundColor: '#fff',
      textAlign: 'center',
      transition: 'transform 0.3s',
      cursor: 'pointer',
      maxWidth: '300px',
      margin: '10px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <img src={course.thumbnail} alt={course.name} style={{
        width: '100%',
        borderRadius: '10px 10px 0 0',
        marginBottom: '10px'
      }} />
      <h3 style={{
        color: '#333',
        fontSize: '1.2rem',
        marginBottom: '5px'
      }}>{course.name}</h3>
      <p style={{
        color: '#666',
        marginBottom: '10px'
      }}>Instructor: {course.instructor}</p>
      <div
        style={{
          color: '#333'
        }}
        >
          {progress} %
        </div>
      <div style={{
        width: '100%',
        height: '20px',
        marginBottom: '15px',
        backgroundColor: '#f0f0f0',
        borderRadius: '10px',
        overflow: 'hidden'
      }}>
        
        <div style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor: '#09ff00',
          borderRadius: '10px'
        }} />

      </div>

      {progress === 100 ? (
        <p style={{
          color: '#28a745',
          fontWeight: 'bold',
          marginBottom: '10px'
        }}>Completed</p>
      ) : (
        <button onClick={handleMarkComplete} style={{
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          padding: '8px 16px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          marginBottom: '10px'
        }}>Mark Completed</button>
      )}
    </div>

  );
};

export default CourseCard;
