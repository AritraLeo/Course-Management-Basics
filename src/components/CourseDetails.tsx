// src/components/CourseDetails.tsx
import React from 'react';

interface Props {
  course: {
    name: string;
    instructor: string;
    description: string;
  };
}

const CourseDetails: React.FC<Props> = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseDetails;
