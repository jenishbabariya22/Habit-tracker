import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import HabitDashboard from './components/HabitDashboard';
import RequireAuth from './components/RequireAuth';
import Profile from './components/Profile';
import Header from './components/Header';
import Register from './pages/Register'; // Ensure this import is correct
import Notification from './components/NotificationPanel'; // Ensure this import is correct

function App() {
  const isLoggedIn = localStorage.getItem('token');
  const [habits] = useState([
    { id: 1, name: 'Exercise' },
    { id: 2, name: 'Read' },
    // Add more habits as needed
  ]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      
        
        {/* Protected Routes: Only accessible if logged in */}
        <Route
          path="/"
          element={
            <RequireAuth>
              <HabitDashboard />
            </RequireAuth>
          }
        />
        
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        
        <Route
          path="/notifications"
          element={
            <RequireAuth>
              <Notification />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
