import React from 'react';
import GlobalStyles from './styles/GlobalStyles.js';
import LandingPage from './pages/LandingPage.tsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/landingpage" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
