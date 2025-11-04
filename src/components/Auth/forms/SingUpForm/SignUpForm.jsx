import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import InputField from "../../shared/InputField/InputField";
import Divider from "../../shared/Divider/Divider";
import GoogleAuth from "../../shared/GoogleAuth/GoogleAuth";

import css from "./SignUpForm.module.css";

const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .length(8, "Password should be 8 simbols length")
    .required("Required"),
});

const initialValues = {
  fullname: "",
  email: "",
  password: "",
};

const SignUpForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Sign Up a new account</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.inputsWrapper}>
            <InputField
              label="Full name"
              id="fullname"
              placeholder="Jane Smith"
            />
            <InputField
              label="Email address"
              id="email"
              placeholder="jane@example.com"
            />
            <InputField label="Password" id="password" placeholder="********" />
          </div>

          <div className={css.buttonsWrapper}>
            <div className={css.btnWrapper}>
              <button type="submit" className={css.submitBtn}>
                Sign up
              </button>
              <p className={css.linkText}>
                Already have on account?{" "}
                <Link to="/login" className={css.link}>
                  Log in
                </Link>
              </p>
            </div>

            <Divider />
            <GoogleAuth name="Sign Up" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
