import { FC, memo } from "react";
import { Link } from "react-router-dom";
import logo from "../img/Listenify_logo.png";
import Searchbar from "./Searchbar";
import Dropdown from "./Dropdown";

interface Props {}

const Navbar: FC<Props> = (props) => {
  return (
    <>
      <div className="flex flex-col mx-auto max-w-screen-2xl">
        <div className="flex flex-col px-5 py-2 bg-gray-700 sm:flex-row">
          <Link to="/">
            <div className="flex items-center justify-center px-5">
              <img className="w-12 h-12 rounded-full" src={logo} alt="logo" />
              <h1 className="px-2 text-3xl font-bold text-white">Listenify</h1>
            </div>
          </Link>

          <div className="flex items-center justify-center w-full my-5 sm:my-0">
            <Searchbar />
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-10 justify-between hidden mx-auto bg-gray-500 sm:flex max-w-screen-2xl">
        <div className="flex items-center px-5 py-2 space-x-6 text-lg font-semibold text-white md:space-x-16 md:text-xl ">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="flex items-center">
          <Dropdown />
        </div>
      </div>
    </>
  );
};

Navbar.defaultProps = {};

export default memo(Navbar);
