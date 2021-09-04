import React, { useState } from "react";
import { FC, memo } from "react";
import Input from "../../components/Input";
import logo from "../../img/Listenify_logo.png";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";

interface Props {}

const Signup: FC<Props> = (props) => {
  // const [data, setData] = useState({ email: "", password: "", username: "" });
  const [toggle, setToggle] = useState(false);
  let toggleClass = "";
  const history = useHistory();

  const toggleHandle = () => {
    setToggle(!toggle);
  };

  if (toggle) {
    toggleClass = "text";
  } else {
    toggleClass = "password";
  }

  // const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setData({ ...data, [event.target.name]: event.target.value });
  // };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      username: yup.string().required().min(5),
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),
    onSubmit: (data) => {
      console.log("signup details : ", data);
      setTimeout(() => {
        console.log("signup Successfull...");
        console.log("Transfering to home...");
        history.push("/home");
      }, 5000);
    },
  });

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-300">
      <form
        className="w-full max-w-lg px-5 py-5 mx-5 bg-white rounded-lg"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col">
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="w-48 h-48 rounded-full" />
          </div>
          <p className="pt-5 text-sm font-semibold text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Log In
            </Link>
          </p>
          <div className="relative pt-10">
            <label className="sr-only">Username</label>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full pl-7 focus:border-blue-400 "
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              autoComplete="username"
            />
            <FaUserAlt className="absolute left-0 text-blue-500 top-11 " />
            {formik.touched.username && (
              <p className="text-red-600">{formik.errors.username}</p>
            )}
          </div>
          <div className="relative pt-8">
            <label className="sr-only">Email</label>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full pl-7 focus:border-blue-400 "
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              autoComplete="email"
            />
            <FaUserAlt className="absolute left-0 text-blue-500 top-9 " />
            {formik.touched.email && (
              <p className="text-red-600">{formik.errors.email}</p>
            )}
          </div>
          <div className="relative pt-8">
            <label className="sr-only">Password</label>
            <Input
              type={toggleClass}
              name="password"
              placeholder="Password"
              className="w-full pl-7 focus:border-blue-500"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
            />
            <FaLock className="absolute left-0 text-blue-500 top-9 " />
            {formik.touched.password && (
              <p className="text-red-600">{formik.errors.password}</p>
            )}
          </div>

          <div className="flex justify-between pt-10">
            <div className="flex items-center">
              <p>Show Password</p>
              <div className="flex items-center pl-2">
                {toggle && (
                  <BsToggleOn
                    className="text-2xl text-blue-500"
                    onClick={toggleHandle}
                  />
                )}
                {!toggle && (
                  <BsToggleOff
                    className="text-2xl text-blue-500"
                    onClick={toggleHandle}
                  />
                )}
              </div>
            </div>
            <div className="flex">
              {/* {submit && (
              <div className="flex items-center pr-4">
                <ImSpinner3 className="animate-spin" />
              </div>
            )} */}
              <button
                type="submit"
                className="px-5 py-2 text-sm text-white bg-blue-500 rounded hover:bg-red-600 bg-primary"
              >
                Sign-Up
              </button>
            </div>
          </div>
          <p className="mt-5 text-sm text-center text-gray-500">
            © 2021 All Rights Reserved.
          </p>
        </div>
      </form>
    </div>
  );
};

Signup.defaultProps = {};

export default memo(Signup);
