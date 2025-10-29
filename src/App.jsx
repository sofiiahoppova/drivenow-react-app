import { Suspense, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import AutoParkPage from "./pages/AutoParkPage";
import BookingPage from "./pages/BookingPage";
import PoliciesPage from "./pages/PoliciesPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer/Footer";

import "./App.css";

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

function App() {
  return (
    <>
      <div>
        <Header />
        <Suspense fallback={<p>Loading...</p>}>
          <Wrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/autopark" element={<AutoParkPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/policies" element={<PoliciesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Wrapper>
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default App;
