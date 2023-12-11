import React from 'react';
import GlobalStyles from './styles/GlobalStyles.js';
import LandingPage from './pages/LandingPage.tsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ErrorPage from './pages/ErrorPage.tsx';


function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<h1>Hola</h1>} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/404" element={<ErrorPage/>} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
