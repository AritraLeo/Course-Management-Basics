// src/pages/CourseListPage.tsx
import React, { useState, useEffect } from 'react';
import CourseList from '../components/CourseList';
import { fetchCourses } from '../api';

const CourseListPage = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function loadCourses() {
      try {
        const data = await fetchCourses();
        setCourses(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadCourses();
  }, []);

  const filteredCourses: Array<Course> = courses.filter(course =>
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
