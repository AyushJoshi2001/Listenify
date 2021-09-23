import { FC, memo } from "react";
import InputBorder from "../../components/InputBorder";

interface Props {}

const Contact: FC<Props> = (props) => {
  return (
    <div className="max-w-5xl mx-auto my-10 bg-gray-200 rounded-lg">
      <p className="px-5 pt-10 text-4xl font-bold">Contact</p>
      <form className="px-5 py-10 space-y-8">
        <div className="flex w-full space-x-10">
          <div className="flex flex-col flex-1 space-y-3">
            <label htmlFor="fname" className="text-sm text-gray-500">
              First Name*
            </label>
            <InputBorder type="text" name="fname" required />
          </div>
          <div className="flex flex-col flex-1 space-y-3">
            <label htmlFor="lname" className="text-sm text-gray-500">
              Last Name*
            </label>
            <InputBorder type="text" name="lname" required />
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="email" className="text-sm text-gray-500">
            Email*
          </label>
          <InputBorder type="text" name="email" required />
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="mobile" className="text-sm text-gray-500">
            Mobile Number(optional)
          </label>
          <InputBorder type="number" name="mobile" />
        </div>
        <div className="flex flex-col space-y-3">
          <label htmlFor="message" className="text-sm text-gray-500">
            Message*
          </label>
          <textarea
            name="message"
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
