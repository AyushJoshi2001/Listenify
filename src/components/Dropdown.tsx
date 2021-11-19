import { Menu, Transition } from "@headlessui/react";
import { FC, Fragment, memo, useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { signout } from "../api/auth";
import AuthContext from "../context/auth.context";

interface Props {
  className?: string;
}

const Dropdown: FC<Props> = ({ className }) => {
  const { user } = useContext(AuthContext);
  return (
    <Menu as="div" className={className}>
      <Fragment>
        <Menu.Button>
          <div className="flex flex-col items-center px-5 py-4 mx-5 space-y-2 border border-opacity-0 rounded-lg hover:border-opacity-100 hover:border-green-300 md:py-1">
            <CgProfile className="text-white w-7 h-7 md:h-10 md:w-10" />
            <p className="text-gray-400">{user!.displayName}</p>
          </div>
        </Menu.Button>
        <Transition
          enter="transition duration-300 ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-300 ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Menu.Items
            className="absolute w-40 bg-transparent rounded-lg shadow-lg top-3 right-44"
            style={{
              border: "1px solid #66BFBF",
            }}
          >
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/profile"
                  className={`py-2 flex px-3 text-sm space-x-2 ${
                    active ? "text-gray-400" : "text-white"
                  } `}
                >
                  <div className="flex items-center">
                    <FaUser className="w-4 h-4" />
                  </div>
                  <p>Profile</p>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`py-2 text-sm flex px-3 space-x-2 ${
                    active ? "text-gray-400" : "text-white"
                  } `}
                  onClick={() => {
                    signout();
                    window.location.href = "/login";
                  }}
                >
                  <div className="flex items-center">
                    <VscSignOut className="w-4 h-4" />
                  </div>
                  <p>Sign Out</p>
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Fragment>
    </Menu>
  );
};

Dropdown.defaultProps = {};

export default memo(Dropdown);
