import React from "react";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import InputField from "../../shared/InputField/InputField";
import Divider from "../../shared/Divider/Divider";
import GoogleAuth from "../../shared/GoogleAuth/GoogleAuth";

import css from "./LogInForm.module.css";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .length(8, "Password should be 8 simbols length")
    .required("Required"),
});

const initialValues = {
  email: "",
  password: "",
};

const LogInForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Log In to your account</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.inputsWrapper}>
            <InputField
              label="Email address"
              id="email"
              placeholder="jane@example.com"
            />
            <div className={css.passwordWrapper}>
              <InputField
                label="Password"
                id="password"
                placeholder="********"
              />
              <a href="" className={css.passwordLink}>
                Foggot password?
              </a>
            </div>
          </div>

          <div className={css.buttonsWrapper}>
            <div className={css.btnWrapper}>
              <button type="submit" className={css.submitBtn}>
                Log in
              </button>
              <p className={css.linkText}>
                Don't have an account?{" "}
                <Link to="/signup" className={css.link}>
                  Sign up
                </Link>
              </p>
            </div>

            <Divider />
            <GoogleAuth name="Log in" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LogInForm;
