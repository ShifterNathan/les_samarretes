import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { UserProvider } from "./context/userContext.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HomePage = React.lazy(() => import("./pages/HomePage.tsx"));
const ErrorPage = React.lazy(() => import("./pages/static/ErrorPage.tsx"));
const Footer = React.lazy(() => import("./components/footer/SimpleFiveColumn.tsx"));
const LoginPage = React.lazy(() => import("./pages/static/LoginPage.tsx"));
const PrivacyPolicy = React.lazy(() => import("./pages/static/GDPR/PrivacyPolicy.tsx"));
const TermsOfService = React.lazy(() => import("./pages/static/GDPR/TermsOfService.tsx"));
const SignUpPage = React.lazy(() => import("./pages/static/SignUpPage.tsx"));
const Cart = React.lazy(() => import("./pages/Cart.tsx"));

function App() {
  return (
    <UserProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/stanleystella" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/privacypolicy"
              element={<PrivacyPolicy headingText="Privacy Policy" />}
            />
            <Route
              path="/termsofservice"
              element={<TermsOfService headingText="Terms Of Service" />}
            />
            <Route path="/404" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </UserProvider>
  );
}

export default App;
