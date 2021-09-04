import { FC, memo } from "react";
import { Link } from "react-router-dom";
import logo from "../img/Listenify_logo.png";

interface Props {}

const Navbar: FC<Props> = (props) => {
  return (
    <div className="flex px-5 py-2 bg-gray-700">
      <Link to="/">
        <div className="flex items-center">
          <img className="w-12 h-12 rounded-full" src={logo} alt="logo" />
          <h1 className="px-2 text-3xl font-bold text-white">Listenify</h1>
        </div>
      </Link>

      <div className="flex items-center ml-10 space-x-5 text-xl font-semibold text-white">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact-Us</Link>
      </div>
    </div>
  );
};

Navbar.defaultProps = {};

export default memo(Navbar);
