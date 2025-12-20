import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

import BookingCard from "../components/CarCards/BookingCard/BookingCard";
import BookingForm from "../components/BookingForm/BookingForm";

import { selectDates } from "../redux/filters/selectors";
import { selectMe } from "../redux/user/selectors";
import { createBooking } from "../redux/bookings/operations";

import css from "./BookingPage.module.css";

const bookingSchema = Yup.object().shape({
  plan: Yup.string().oneOf(["Basic plan", "Full coverage"]).required(),
  paymentMethod: Yup.string().oneOf(["online", "offline"]).required("Required"),

  phoneNumber: Yup.string()
    .matches(/^\+?\d{10,15}$/, "Enter a valid phone number")
    .required("Required"),

  dateOfBirth: Yup.string()
    .matches(
      /^\d{4}\-\d{2}\-\d{2}$/,
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

const BookingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(selectMe);

  const initialValues = {
    plan: "Basic plan",
    paymentMethod: "",

    fullName: user.fullName || "",
    email: user.email || "",
    phoneNumber: user.phoneNumber || "",
    dateOfBirth: user.dateOfBirth ? user.dateOfBirth.split("T")[0] : "",

    passport: user.passportSerial || "",
    passportPhoto: "",

    license: user.driverLicenseSerial || "",
    licensePhoto: "",
  };

  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan");

  const dates = useSelector(selectDates);
  const startDate = dates.startDate ?? localStorage.getItem("startDate");
  const endDate = dates.endDate ?? localStorage.getItem("endDate");

  const handleSubmit = async (values) => {
    try {
      await dispatch(
        createBooking({
          plan: plan === "basic" ? "basicPlan" : "fullCoverage",
          carId: Number(id),
          startDate,
          endDate,
          user: {
            fullName: values.fullName,
            phoneNumber: values.phoneNumber,
            dateOfBirth: values.dateOfBirth,
            email: values.email,
            passportSerial: values.passport || null,
            driverLicenseSerial: values.license || null,
          },
        })
      ).unwrap();
      toast.success("You have booked the car successfully!");
      navigate("/account");
    } catch (e) {
      toast.error(e);
    }
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Booking Details & Verification</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={bookingSchema}
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
