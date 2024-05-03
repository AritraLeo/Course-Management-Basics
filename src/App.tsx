// src/App.tsx
import { useState, useEffect } from 'react';
import { fetchCourses } from './api';

interface Course {
  id: number;
  name: string;
  instructor: string;
  description: string;
}

function App() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [search, setSearch] = useState<string>('');

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

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(search.toLowerCase()) ||
    course.instructor.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." />
      <ul>
        {filteredCourses.map(course => (
          <li key={course.id} onClick={() => viewCourse(course)}>
            <h3>{course.name}</h3>
            <p>Instructor: {course.instructor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function viewCourse(course: Course) {
  // Redirect to course details page or display details here
  console.log('Viewing course:', course);
}

export default App;
