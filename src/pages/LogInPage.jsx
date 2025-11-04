import React from "react";

import AuthLayout from "../components/AuthLayout/AuthLayout";
import LogInForm from "../components/Auth/forms/LogInForm/LogInForm";

const LogInPage = () => {
  return (
    <AuthLayout>
      <LogInForm />
    </AuthLayout>
  );
};

export default LogInPage;
