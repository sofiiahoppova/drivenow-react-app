import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

import InputField from "../../shared/InputField/InputField";
import Divider from "../../shared/Divider/Divider";
import GoogleAuth from "../../shared/GoogleAuth/GoogleAuth";

import { forgotPassword, logIn } from "../../../../redux/auth/operations";

import css from "./LogInForm.module.css";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(8, "Password should have more than 7 simbols length")
    .required("Required"),
});

const initialValues = {
  email: "",
  password: "",
};

const LogInForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      await dispatch(logIn(values)).unwrap();
      navigate("/autopark");
      toast.success("You have Logged In successfully!");
    } catch (e) {
      toast.error(e);
    }
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
