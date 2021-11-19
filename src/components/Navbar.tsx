import { FC, memo } from "react";
import { Link } from "react-router-dom";
import logo from "../img/Listenify_logo.png";
import Searchbar from "./Searchbar";
import Dropdown from "./Dropdown";

interface Props {}

const Navbar: FC<Props> = (props) => {
  return (
    <>
      <div className="flex flex-col mx-auto max-w-screen-2xl ">
        <div className="flex flex-col justify-between px-5 py-2 sm:flex-row">
          <Link to="/">
            <div className="flex items-center justify-center px-5">
              <img className="w-16 h-16 rounded-full" src={logo} alt="logo" />
              <h1 className="px-2 text-4xl font-bold text-white">Listenify</h1>
            </div>
          </Link>

          <div className="flex items-center">
            <Dropdown />
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-10 justify-between hidden py-1 mx-auto bg-black bg-opacity-80 sm:flex max-w-screen-2xl">
        <div className="flex items-center px-5 py-2 space-x-6 text-lg md:space-x-16 md:text-xl ">
          <Link
            to="/home"
            className="text-white border-b-2 border-blue-400 border-opacity-0 hover:border-opacity-100 hover:text-gray-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white border-b-2 border-blue-400 border-opacity-0 hover:border-opacity-100 hover:text-gray-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white border-b-2 border-opacity-0 hover:border-blue-400 hover:border-opacity-100 hover:text-gray-300"
          >
            Contact
          </Link>
          <Link
            to="/admin"
            className="text-white border-b-2 border-blue-400 border-opacity-0 hover:border-opacity-100 hover:text-gray-300"
          >
            Admin
          </Link>
        </div>

        <div className="flex items-center justify-center w-full mx-5 my-5 sm:my-0">
          <Searchbar />
        </div>
      </div>
    </>
  );
};

Navbar.defaultProps = {};

export default memo(Navbar);
