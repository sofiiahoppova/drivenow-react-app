import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import AutoParkPage from "./pages/AutoParkPage";
import BookingPage from "./pages/BookingPage";
import PoliciesPage from "./pages/PoliciesPage";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import UserAccount from "./components/UserAccount/UserAccount";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import { selectIsAuthenticated, selectToken } from "./redux/auth/selectors";
import { fetchUserMe } from "./redux/user/operations";
import { modalComponents } from "./constants/modalComponents";

import "./App.css";
import { setAuthHeader } from "./redux/auth/operations";

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (isAuthenticated && token) {
      setAuthHeader(token);
      dispatch(fetchUserMe());
    }
  }, [isAuthenticated, token, dispatch]);

  const location = useLocation();
  const hideLayoutPaths = ["/login", "/signup"];

  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);
  const shouldHideFooter = location.pathname == "/account";

  const { isOpen, component, props } = useSelector((state) => state.modal);
  const Component = modalComponents[component];

  const [activeSlide, setActiveSlide] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  return (
    <>
      {!shouldHideLayout && <Header />}

      <Suspense fallback={<p>Loading...</p>}>
        <Wrapper>
          <Routes>
            <Route
              path="/"
              element={<HomePage setActiveSlide={setActiveSlide} />}
            />
            <Route
              path="/autopark"
              element={<AutoParkPage activeSlide={activeSlide} />}
            />
            <Route path="/policies" element={<PoliciesPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/booking/:id" element={<BookingPage />} />
              <Route path="/account" element={<UserAccount />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Wrapper>
      </Suspense>

      {!shouldHideLayout && !shouldHideFooter && <Footer />}

      {isOpen && (
        <Modal>
          <Component {...props} />
        </Modal>
      )}
    </>
  );
};

export default App;
