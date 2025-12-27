import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";

import InputField from "../Auth/shared/InputField/InputField";
import BookingsList from "../BookingsList/BookingsList.jsx";

import { selectMe } from "../../redux/user/selectors";
import { updateUserMe } from "../../redux/user/operations";
import { setOpen } from "../../redux/modal/modalSlice";

import css from "./UserAcccount.module.css";

const BookingSchema = Yup.object().shape({
  fullName: Yup.string().min(3).required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phoneNumber: Yup.string().matches(
    /^\+?\d{10,15}$/,
    "Enter a valid phone number"
  ),
  dateOfBirth: Yup.string().matches(
    /^\d{4}\-\d{2}\-\d{2}$/,
    "Date of birth must be in format YYYY-MM-DD"
  ),
});

const UserAccount = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectMe);

  const handleSubmit = async (values) => {
    let data;

    for (const [key, value] of Object.entries(values)) {
      if (value) {
        data = { ...data, [key]: value };
      }
    }
    console.log(data);

    try {
      await dispatch(updateUserMe(data)).unwrap();
      toast.success("You have updated data successfully!");
    } catch (e) {
      toast.error(e);
    }
  };

  const initialValues = {
    fullName: user?.fullName || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    dateOfBirth: user?.dateOfBirth ? user.dateOfBirth.split("T")[0] : "",
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
            <span className={css.infoTitle}>Your Name</span>
            <p className={css.infoText}>{user.fullName}</p>
          </div>
          <div className={css.infoWrapper}>
            <span className={css.infoTitle}>Your Email</span>
            <p className={css.infoText}>{user.email}</p>
          </div>
        </div>
        <button
          onClick={() =>
            dispatch(
              setOpen({
                component: "LogOutModal",
              })
            )
          }
          className={css.logoutBtn}
        >
          Log Out
        </button>
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
          <BookingsList />
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
