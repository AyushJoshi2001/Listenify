import { Dialog, Transition } from "@headlessui/react";
import { FC, Fragment, memo, useState } from "react";
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { signout } from "../api/auth";

interface Props {
  className?: string;
}

const Sidenav: FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <GiHamburgerMenu
          className="absolute z-10 text-gray-700 sm:hidden right-4 w-7 h-7"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </div>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog open={isOpen} onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-400"
            enterFrom="opacity-0"
            enterTo="opacity-50"
            entered="opacity-50"
            leave="ease-in-out duration-400"
            leaveFrom="opacity-50"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black"></Dialog.Overlay>
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-transform duration-400"
            enterFrom="-translate-x-full "
            enterTo="translate-x-0 "
            leave="transition-transform duration-400"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full "
          >
            <div className="fixed top-0 left-0 z-10 transform">
              <div
                className={
                  "relative flex flex-col w-64 min-h-screen bg-black bg-opacity-70 rounded-md flex-shrink-0" +
                  className
                }
              >
                <GiCancel
                  className="absolute w-7 h-7 right-2 top-2"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                />
                <Link
                  to="/home"
                  className="px-3 py-2 mx-3 mt-16 font-semibold text-white bg-green-400 rounded-lg outline-none hover:bg-green-100 hover:text-gray-500"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Home
                </Link>
                <Link
                  to="/profile"
                  className="px-3 py-2 mx-3 mt-3 font-semibold text-white bg-green-400 rounded-lg outline-none hover:bg-green-100 hover:text-gray-500"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Profile
                </Link>
                <Link
                  to="/about"
                  className="px-3 py-2 mx-3 mt-3 font-semibold text-white bg-green-400 rounded-lg outline-none hover:bg-green-100 hover:text-gray-500"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="px-3 py-2 mx-3 mt-3 font-semibold text-white bg-green-400 rounded-lg outline-none hover:bg-green-100 hover:text-gray-500"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Contact
                </Link>
                <Link
                  to="/admin"
                  className="px-3 py-2 mx-3 mt-3 font-semibold text-white bg-green-400 rounded-lg outline-none hover:bg-green-100 hover:text-gray-500"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  Admin
                </Link>

                <button
                  type="button"
                  className="px-3 py-2 mx-3 mt-3 font-semibold text-left text-white bg-green-400 rounded-lg outline-none hover:bg-green-100 hover:text-gray-500"
                  onClick={() => {
                    setIsOpen(!isOpen);
                    signout();
                  }}
                >
                  SignOut
                </button>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
};

Sidenav.defaultProps = {};

export default memo(Sidenav);
