import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import BookingCard from "../components/CarCards/BookingCard/BookingCard";
import BookingForm from "../components/BookingForm/BookingForm";

import css from "./BookingPage.module.css";

const BookingSchema = Yup.object().shape({
  plan: Yup.string().oneOf(["basicPlan", "fullCoverage"]).required(),
  paymentMethod: Yup.string().oneOf(["online", "offline"]).required(),

  phoneNumber: Yup.string()
    .matches(/^\+?\d{10,15}$/, "Enter a valid phone number")
    .required("Required"),

  dateOfBirth: Yup.string()
    .matches(
      /^\d{4}\.\d{2}\.\d{2}$/,
      "Date of birth must be in format YYYY.MM.DD"
    )
    .required("Required"),

  fullName: Yup.string().min(3).required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),

  passport: Yup.string().min(4, "Serial number too short"),
  passportPhoto: Yup.mixed(),

  license: Yup.string().min(4, "Serial number too short"),
  licensePhoto: Yup.mixed(),
});

const initialValues = {
  plan: "basicPlan",
  paymentMethod: "offline",

  phoneNumber: "",
  dateOfBirth: "",
  fullName: "",
  email: "",

  passport: "",
  passportPhoto: "",

  license: "",
  licensePhoto: "",
};

const BookingPage = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Booking Details & Verification</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={BookingSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.wrapper}>
          <BookingForm />
          <BookingCard />
        </Form>
      </Formik>
    </div>
  );
};

export default BookingPage;
