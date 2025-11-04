import React from "react";

import AuthLayout from "../components/AuthLayout/AuthLayout";
import SignUpForm from "../components/Auth/forms/SingUpForm/SignUpForm";

const SignUpPage = () => {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUpPage;
