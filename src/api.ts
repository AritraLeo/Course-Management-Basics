// src/api.ts
export async function fetchCourses() {
    const response = await fetch('/src/courses.json');
    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }
    return await response.json();
  }

  export async function fetchStudentDetails() {
    const response = await fetch('/src/studentDetails.json');
    if (!response.ok) {
      throw new Error('Failed to fetch courses');
    }
    return await response.json();
  }