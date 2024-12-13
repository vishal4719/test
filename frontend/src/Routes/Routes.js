import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import Dashboard from '../Components/Dashboard';
import DataFetcher from '../Components/DataFetcher';  // Make sure you import it correctly

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/data" element={<DataFetcher />} />  {/* Use the component with JSX tags */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
