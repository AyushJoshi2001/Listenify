import { FC, memo, useState } from "react";
import { FaBackward, FaForward, FaPause, FaPlayCircle } from "react-icons/fa";
import { ImLoop2 } from "react-icons/im";
import logo from "../img/Listenify_logo.png";

interface Props {
  className?: string;
}

const Playbar: FC<Props> = ({ className }) => {
  const [play, setPlay] = useState(false);

  return (
    <div
      className={
        "rounded-t-lg pb-5 pt-2  w-full bg-gray-700 fixed bottom-0 mx-auto max-w-screen-2xl " +
        className
      }
    >
      <div className="flex justify-between px-5">
        <span className="text-white">00:30</span>
        <span className="text-white">05:30</span>
      </div>
      {/* title */}
      <div className="flex justify-center px-5 space-x-2">
        <div className="flex items-center">
          <img
            className="flex-shrink-0 rounded-full w-7 h-7"
            src={logo}
            alt="song"
          />
        </div>
        <p className="flex items-center pt-2 text-sm text-white">
          Lorem ipsum dolor sit amet.
        </p>
      </div>

      <div className="flex items-center justify-center h-full pt-2 space-x-10">
        <FaBackward className="w-10 h-10 text-white" />
        {play ? (
          <FaPause
            className="w-10 h-10 text-white"
            onClick={() => setPlay(!play)}
          />
        ) : (
          <FaPlayCircle
            className="w-10 h-10 text-white"
            onClick={() => setPlay(!play)}
          />
        )}
        <FaForward className="w-10 h-10 text-white" />
        <ImLoop2 className="text-white w-7 h-7" />
      </div>
    </div>
  );
};

Playbar.defaultProps = {};

export default memo(Playbar);
