import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {FaEye, FaEyeSlash} from 'react-icons/fa'
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'

const initialValues = {
    email: '',
    password: ''
}

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (val) =>{
    console.log(val)
  }

  const validationSchema = Yup.object({
    email: Yup.string().required("This is a required field").email("Invalid Email format"),
    password: Yup.string().required("This is a required field")
  })

  return (
    <div className="shop-container my-8 min-h-[80vh]">
      <div className="max-w-[450px] mx-auto min-h-[80px] bg-white rounded p-5">
        <div>
          <h1 className="text-2xl font-semibold font-poppins">Login</h1>
          <hr className="bg-shopDarkBlue h-[5px] w-[28px] ml-[2px] mt-[-5px]" />
        </div>
       <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {(formik) => (
            <Form>
             <div className="mt-7">
               <label htmlFor="email" className="mb-1 block font-poppins">
                 Email
               </label>
               <Field
                name="email"
                 type="email"
                 className="input-control w-full"
                 id="email"
                 placeholder="Enter email"
               />
                 <ErrorMessage
                    name="email"
                    component={"small"}
                    className="text-red-500"
                  />
             </div>
             <div className="mt-7 relative">
               <label htmlFor="password" className="mb-1 block font-poppins">
                 Password
               </label>
               <Field
               name="password"
                 type={showPassword ? 'text' : 'password'}
                 className="input-control w-full"
                 id="password"
                 placeholder="Enter password"
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
   
             <div className="text-center mt-7">
               <input
                 type="submit"
                 value="Login"
                 className="bg-shopDarkBlue text-white px-4 py-2 rounded-md cursor-pointer"
               />
             </div>
            </Form>
        )}
       </Formik>

        <div className="mt-7 text-center">
          <p>
            Don't have an Account?{" "}
            <Link to={"/signup"} className="text-blue-900 font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
