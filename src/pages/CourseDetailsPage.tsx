// src/pages/CourseDetailsPage.tsx
import React, { useState, useEffect } from 'react';
import CourseDetails from '../components/CourseDetails';
import { useParams } from 'react-router-dom';
import { fetchCourses } from '../api';

const CourseDetailsPage: React.FC = () => {
  const [course, setCourse] = useState<any>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    async function loadCourse() {
      try {
        const courses = await fetchCourses();
        const foundCourse = courses.find((course: any) => course.id === Number(id));
        setCourse(foundCourse);
      } catch (error) {
        console.error(error);
      }
    }
    loadCourse();
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <h2>Course Details</h2>
      <CourseDetails course={course} />
    </div>
  );
};

export default CourseDetailsPage;
