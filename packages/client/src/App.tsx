import React from 'react';
import HomePage from './pages/HomePage.tsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ErrorPage from './pages/ErrorPage.tsx';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stanleystella" element={<HomePage />} />
          <Route path="/404" element={<ErrorPage/>} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
