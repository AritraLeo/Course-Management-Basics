// src/components/Dashboard.tsx
import React from 'react';

interface Props {
  courses: { name: string }[];
}

const Dashboard: React.FC<Props> = ({ courses }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Enrolled Courses</h3>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
