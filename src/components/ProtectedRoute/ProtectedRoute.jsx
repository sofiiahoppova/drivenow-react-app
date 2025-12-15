import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { setOpen } from "../../redux/modal/modalSlice";
import { selectMe } from "../../redux/user/selectors";

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectMe);

  useEffect(() => {
    if (!user) {
      dispatch(setOpen({ component: "AuthModal" }));
    }
  }, [dispatch, user]);

  if (user) {
    return <Outlet />;
  }
};

export default ProtectedRoute;
