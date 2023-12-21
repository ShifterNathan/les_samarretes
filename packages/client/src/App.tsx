import React from 'react';
import HomePage from './pages/HomePage.tsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ErrorPage from './pages/ErrorPage.tsx';
import Header from './components/header/Header.tsx';
import Footer from './components/footer/SimpleFiveColumn.tsx';


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stanleystella" element={<HomePage />} />
          <Route path="/404" element={<ErrorPage/>} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
