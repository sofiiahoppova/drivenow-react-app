import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import AutoParkPage from "./pages/AutoParkPage";
import BookingPage from "./pages/BookingPage";
import PoliciesPage from "./pages/PoliciesPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/autopark" element={<AutoParkPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/policies" element={<PoliciesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default App;
