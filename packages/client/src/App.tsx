import React from "react";
import HomePage from "./pages/HomePage.tsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { UserProvider } from "./context/userContext.tsx";
import ErrorPage from "./pages/static/ErrorPage.tsx";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/SimpleFiveColumn.tsx";
import LoginPage from "./pages/static/LoginPage.tsx";
import PrivacyPolicy from "./pages/static/GDPR/PrivacyPolicy.tsx";
import TermsOfService from "./pages/static/GDPR/TermsOfService.tsx";
import SignUpPage from "./pages/static/SignUpPage.tsx";
import Cart from "./pages/Cart.tsx";


function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/stanleystella" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/cart" element={<Cart/>} />
            <Route
              path="/privacypolicy"
              element={<PrivacyPolicy headingText="Privacy Policy" />}
            />
            <Route
              path="termsofservice"
              element={<TermsOfService headingText="Terms Of Service" />}
            />
            <Route path="/404" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
          <Footer />
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
