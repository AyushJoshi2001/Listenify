import { useFormik } from "formik";
import React, { FC, memo } from "react";
import * as yup from "yup";
import { submitContactMessage } from "../../api/auth";

interface Props {}

const Contact: FC<Props> = (props) => {
  const formik = useFormik({
    initialValues: {
      First_Name: "",
      Last_Name: "",
      Email: "",
      Mobile: "",
      Message: "",
    },

    validationSchema: yup.object().shape({
      First_Name: yup.string().required(),
      Last_Name: yup.string().required(),
      Email: yup.string().required().email(),
      Mobile: yup.string().min(10),
      Message: yup.string().required(),
    }),

    onSubmit: (data) => {
      submitContactMessage(data);
    },
  });

  return (
    <div className="max-w-5xl mx-auto my-10 bg-gray-200 rounded-lg">
      <p className="px-5 pt-10 text-4xl font-bold">Contact</p>
      <form className="px-5 py-10 space-y-8" onSubmit={formik.handleSubmit}>
        <div className="flex w-full space-x-10">
          <div className="flex flex-col flex-1 space-y-3">
            <label htmlFor="First_Name" className="text-sm text-gray-500">
              First Name*
            </label>
            <input
              className="px-2 py-2 border border-gray-500 rounded-lg outline-none "
              type="text"
              name="First_Name"
              value={formik.values.First_Name}
              onChange={formik.handleChange}
              required
            />
          </div>
          <div className="flex flex-col flex-1 space-y-3">
            <label htmlFor="Last_Name" className="text-sm text-gray-500">
              Last Name*
            </label>
            <input
              className="px-2 py-2 border border-gray-500 rounded-lg outline-none "
              type="text"
              name="Last_Name"
              value={formik.values.Last_Name}
              onChange={formik.handleChange}
              required
            />
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="Email" className="text-sm text-gray-500">
            Email*
          </label>
          <input
            className="px-2 py-2 border border-gray-500 rounded-lg outline-none "
            type="text"
            onChange={formik.handleChange}
            name="Email"
            value={formik.values.Email}
            required
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="Mobile" className="text-sm text-gray-500">
            Mobile Number(optional)
          </label>
          <input
            className="px-2 py-2 border border-gray-500 rounded-lg outline-none "
            type="text"
            value={formik.values.Mobile}
            onChange={formik.handleChange}
            name="Mobile"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="Message" className="text-sm text-gray-500">
            Message*
          </label>
          <textarea
            name="Message"
            value={formik.values.Message}
            onChange={formik.handleChange}
            className="h-24 px-2 py-1 border border-gray-500 rounded-lg "
            required
          />
        </div>
        <div className="w-full max-w-sm mx-auto">
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-800 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

Contact.defaultProps = {};

export default memo(Contact);
