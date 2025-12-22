import React from "react";

import AuthLayout from "../components/AuthLayout/AuthLayout";
import ResetPasswordForm from "../components/Auth/forms/ResetPasswordForm/ResetPasswordForm";

const ResetPasswordPage = () => {
  return (
    <AuthLayout>
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default ResetPasswordPage;
