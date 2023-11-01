import React from "react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  state: "",
  city: "",
  pin: "",
  address: "",
  userName: "",
  password: "",
  confirm_password: "",
  phoneNumber: "",
};

YupPassword(Yup)

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (values) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("This is a required field")
      .min(3, "First name must contain atleast 3 characters"),
    lastName: Yup.string()
      .required("This is a required field")
      .min(3, "Last name must contain atleast 3 characters"),
    email: Yup.string()
      .required("This is a required field")
      .email("Email is invalid"),
    state: Yup.string().required("This is a required field"),
    city: Yup.string().required("This is a required field"),
    pin: Yup.number()
      .required("This is a required field")
      .min(4, "Pin code must be atleast 4 characters"),
    address: Yup.string().required("This is a required field"),
    userName: Yup.string().required("This is a required field"),
    password: Yup.string()
      .required("This is a required field").password()
      .min(8, "Password must contain atleast 8 characters")
      .minLowercase(1, "Password must contain atleast one uppercase character")
      .minNumbers(1, "Password must contain atleast one number")
      .minSymbols(1, "Password must contain atleast one special character"),
    confirm_password: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords do not match"
    ).required("This is a required field"),
    phoneNumber: Yup.string().required("This is a required field")
  });

  return (
    <div className="shop-container mt-4 mb-12">
      <div className="max-w-[900px] bg-white rounded mx-auto p-5">
        <h1 className="text-2xl font-semibold font-poppins">Registration</h1>
        <hr className="bg-shopDarkBlue h-[5px] w-[30px] mt-[-5px]" />

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(formik) => (
            <Form noValidate className="mt-8">
              {/* first row  */}
              <div className="flex gap-5 flex-col md:flex-row">
                <div className="flex-1">
                  <label
                    className="block mb-1 font-poppins"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <Field
                    name="firstName"
                    type="text"
                    id="firstName"
                    className="input-control w-full"
                    placeholder="Enter your first name"
                  />
                  <ErrorMessage
                    name="firstName"
                    component={"small"}
                    className="text-red-500"
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 font-poppins" htmlFor="lastName">
                    Last Name
                  </label>
                  <Field
                    name="lastName"
                    type="text"
                    id="lastName"
                    className="input-control w-full"
                    placeholder="Enter your last name"
                  />
                    <ErrorMessage
                    name="lastName"
                    component={"small"}
                    className="text-red-500"
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-1 font-poppins" htmlFor="email">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    id="email"
                    className="input-control w-full"
                    placeholder="Enter your email"
                  />
                    <ErrorMessage
                    name="email"
                    component={"small"}
                    className="text-red-500"
                  />
                </div>
              </div>

              {/* second row  */}
              <div className="mt-5 flex gap-5 flex-col md:flex-row">
                <div className="flex-1">
                  <label htmlFor="mobile" className="block mb-1 font-poppins ">
                    Phone No.
                  </label>
                  <PhoneInput
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={(e) => formik.setFieldValue("phoneNumber", e)}
                    onBlur={formik.handleBlur("phoneNumber")}
                    id="mobile"
                    className="input-phone-number"
                    placeholder="Enter phone number"
                    countryCallingCodeEditable={false}
                  />
                    <ErrorMessage
                    name="phoneNumber"
                    component={"small"}
                    className="text-red-500"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="state" className="block mb-1 font-poppins">
                    State
                  </label>
                  <Field
                    name="state"
                    type="text"
                    id="state"
                    className="input-control w-full"
                    placeholder="Enter your state"
                  />
                    <ErrorMessage
                    name="state"
                    component={"small"}
                    className="text-red-500"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="city" className="block mb-1 font-poppins">
                    City
                  </label>
                  <Field
                    name="city"
                    type="text"
                    id="city"
                    className="input-control w-full"
                    placeholder="Enter your city"
                  />
                    <ErrorMessage
                    name="city"
                    component={"small"}
                    className="text-red-500"
                  />
                </div>
              </div>

              {/* third row  */}
              <div className="mt-5 gap-5 flex flex-col md:flex-row">
                <div className="flex-[1]">
                  <label htmlFor="pin" className="block mb-1 font-poppins">
                    Pin Code
                  </label>
                  <Field
                    name="pin"
                    type="number"
                    className="input-control w-full"
                    placeholder="Enter city pin"
                    id="pin"
                  />
                    <ErrorMessage
                    name="pin"
                    component={"small"}
                    className="text-red-500"
                  />
                </div>
                <div className="flex-[2]">
                  <label htmlFor="address" className="block mb-1 font-poppins">
                    Address
                  </label>
                  <Field
                    as={"textarea"}
                    rows={3}
                    name="address"
                    type="text"
                    className="input-control w-full resize-none"
                    placeholder="Enter shipping address"
                    id="address"
                  />
                    <ErrorMessage
                    name="address"
                    component={"small"}
                    className="text-red-500"
                  />
                </div>
              </div>

              {/* fourth row  */}
              <div className="mt-5 gap-5 flex flex-col md:flex-row">
                <div className="flex-1">
                  <label htmlFor="user" className="block mb-1 font-poppins">
                    Username
                  </label>
                  <Field
                    name="userName"
                    type="text"
                    className="input-control w-full"
                    id="user"
                    placeholder="Enter a unique username"
                  />
                    <ErrorMessage
                    name="userName"
                    component={"small"}
                    className="text-red-500"
                  />
                </div>
                <div className="flex-1 relative">
                  <label htmlFor="password" className="block mb-1 font-poppins">
                    Password
                  </label>
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input-control w-full"
                    id="password"
                    placeholder="Enter a strong password"
                  />
                  {showPassword ? (
                    <FaEye
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-[39px] right-[10px] cursor-pointer"
                      size={22}
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-[39px] right-[10px] cursor-pointer"
                      size={22}
                    />
                  )}
                    <ErrorMessage
                    name="password"
                    component={"small"}
                    className="text-red-500"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="confirm_password"
                    className="block mb-1 font-poppins"
                  >
                    Confirm Password
                  </label>
                  <Field
                    name="confirm_password"
                    type="password"
                    className="input-control w-full"
                    id="confirm_password"
                    placeholder="Confirm password"
                  />
                    <ErrorMessage
                    name="confirm_password"
                    component={"small"}
                    className="text-red-500"
                  />
                </div>
              </div>

              <div className="mt-5 text-center">
                <input
                  type="submit"
                  value="Sign Up"
                  className="bg-shopDarkBlue text-white px-4 py-2 rounded cursor-pointer"
                />
              </div>
            </Form>
          )}
        </Formik>

        <div className="text-center mt-5">
          <p>
            Already have an Account?{" "}
            <Link to={"/login"} className="text-blue-900 font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
