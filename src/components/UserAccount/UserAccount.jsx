import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

import InputField from "../Auth/shared/InputField/InputField";

import css from "./UserAcccount.module.css";

const user = {
  id: 10,
  fullName: "Alexa Sloany",
  email: "alexa1@example.com",
  password: "$2b$10$1OE1zkqphwOzQDyr4uA3qublQ8o2WT/311ZFxspoAqhdF8ztgjqxi",
  phoneNumber: null,
  dateOfBirth: null,
  passportUrl: null,
  driverLicenseUrl: null,
  createdAt: "2025-11-12T15:50:31.965Z",
  updatedAt: "2025-11-12T15:50:59.352Z",
  bookings: [
    {
      id: 1,
      plan: "fullCoverage",
      status: "pending",
      startDate: "2025-11-25T00:00:00.000Z",
      endDate: "2025-11-30T00:00:00.000Z",
      createdAt: "2025-11-20T08:40:35.169Z",
      updatedAt: "2025-11-20T08:48:57.165Z",
      carId: 18,
      userId: 1,
      car: {
        carClass: "SUV",
        model: "Qashqai",
        brand: "Nissan",
      },
    },
    {
      id: 2,
      plan: "fullCoverage",
      status: "pending",
      startDate: "2025-11-25T00:00:00.000Z",
      endDate: "2025-11-30T00:00:00.000Z",
      createdAt: "2025-11-20T08:40:35.169Z",
      updatedAt: "2025-11-20T08:48:57.165Z",
      carId: 18,
      userId: 1,
      car: {
        carClass: "SUV",
        model: "Qashqai",
        brand: "Nissan",
      },
    },
    {
      id: 3,
      plan: "fullCoverage",
      status: "pending",
      startDate: "2025-11-25T00:00:00.000Z",
      endDate: "2025-11-30T00:00:00.000Z",
      createdAt: "2025-11-20T08:40:35.169Z",
      updatedAt: "2025-11-20T08:48:57.165Z",
      carId: 18,
      userId: 1,
      car: {
        carClass: "SUV",
        model: "Qashqai",
        brand: "Nissan",
      },
    },
  ],
};

const BookingSchema = Yup.object().shape({
  fullName: Yup.string().min(3).required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string()
    .matches(/^\+?\d{10,15}$/, "Enter a valid phone number")
    .required("Required"),
  dateOfBirth: Yup.string()
    .matches(
      /^\d{4}\.\d{2}\.\d{2}$/,
      "Date of birth must be in format YYYY.MM.DD"
    )
    .required("Required"),
});

const initialValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  dateOfBirth: "",
};

const UserAccount = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={css.container}>
      <aside className={css.sidebar}>
        <div className={css.userInfo}>
          <img
            src="/images/default-avatar.webp"
            alt="user avatar"
            className={css.avatar}
          />
          <div className={css.infoWrapper}>
            <div className={css.infoWrapper}>
              <span className={css.infoTitle}>Your Name</span>
              <p className={css.infoText}>{user.fullName}</p>
            </div>
            <div className={css.infoWrapper}>
              <span className={css.infoTitle}>Your Email</span>
              <p className={css.infoText}>{user.email}</p>
            </div>
          </div>
        </div>
        <button className={css.logoutBtn}>Log Out</button>
      </aside>
      <div className={css.mainWrarpper}>
        <Formik
          initialValues={initialValues}
          validationSchema={BookingSchema}
          onSubmit={handleSubmit}
        >
          <Form className={css.wrapper}>
            <div className={css.titleWrapper}>
              <h2 className={css.title}>Update Your Account Details</h2>
              <p className={css.description}>
                Keep your info current for a smoother booking experience
              </p>
            </div>
            <div className={css.form}>
              <InputField
                label={"Full name"}
                id={"fullName"}
                placeholder={"Jane Doh"}
              />
              <InputField
                label={"Email address"}
                id={"email"}
                placeholder={"email@example.com"}
              />
              <InputField
                label={"Phone number"}
                id={"phoneNumber"}
                placeholder={"+380999999999"}
              />
              <InputField
                label={"Date of birth"}
                id={"dateOfBirth"}
                placeholder={"YYYY.MM.DD"}
              />
            </div>
            <button type="submit" className={css.basicBtn}>
              Save
            </button>
          </Form>
        </Formik>

        <span className={css.divider} />
        <div className={css.wrapper}>
          <div className={css.titleWrapper}>
            <h2 className={css.title}>Manage Your Bookings</h2>
            <p className={css.description}>
              View all your active, upcoming, and completed reservations in one
              place
            </p>
          </div>
          {user.bookings.length >= 1 ? (
            user.bookings.map((booking) => {
              return (
                <div key={booking.id} className={css.bookingWrapper}>
                  <div className={css.bookingBlock}>
                    <h3 className={css.bookingTitle}>Booking #{booking.id}</h3>
                    <p className={css.bookingCar}>
                      {booking.car.brand} {booking.car.model}
                      {`(${booking.car.carClass})`}
                    </p>
                    <p className={css.bookingText}>{booking.plan}</p>
                  </div>
                  <div className={css.bookingBlock}>
                    <p className={css.bookingText}>
                      PickUp Date: {booking.startDate.split("T")[0]}
                    </p>
                    <p className={css.bookingText}>
                      DropOff Date: {booking.endDate.split("T")[0]}
                    </p>
                  </div>
                  <div className={css.bookingBlock}>
                    <button className={css.bookingBasicBtn}>Update</button>
                    <button className={css.transBtn}>Cancel</button>
                  </div>
                </div>
              );
            })
          ) : (
            <p className={css.text}>You don't have any bookings yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
