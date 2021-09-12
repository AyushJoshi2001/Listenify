import { FC, memo } from "react";
import logo from "../img/Listenify_logo.png";
import { FaPlay } from "react-icons/fa";

interface Props {
  onClick: () => void;
  className?: string;
}

const MusicCard: FC<Props> = ({ onClick, className }) => {
  return (
    <>
      <div
        className={
          "w-40 h-64 mt-10 ml-10 bg-purple-400 hover:bg-purple-300 rounded-lg shadow-lg cursor-pointer " +
          className
        }
        onClick={onClick}
      >
        <div className="relative p-1">
          <img src={logo} alt="song" className="w-full h-40 rounded-lg" />
          <FaPlay className="absolute text-red-500 w-9 h-9 bottom-3 right-3" />
        </div>
        <p className="px-2 pt-3 font-semibold text-center text-white">
          Lorem, ipsum. Lorem ipsum dolor.
        </p>
      </div>
    </>
  );
};

MusicCard.defaultProps = {};

export default memo(MusicCard);
