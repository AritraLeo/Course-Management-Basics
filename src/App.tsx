import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseListPage from './pages/CourseListPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import DashboardPage from './pages/DashboardPage';

const App: React.FC = () => {
  return (
    <Router>
    <Routes>
      <Route
        path="/"
        element={<CourseListPage />}
        />
      <Route
        path="/course/:id"
        element={<CourseDetailsPage />}
        />
      <Route
        path="/dashboard"
        element={<DashboardPage />}
        />
    </Routes>
        </Router>
  );
};

export default App;
