import { FC, memo } from "react";
import { FaPlay } from "react-icons/fa";

interface Props {
  onClick: () => void;
  className?: string;
  src?: string;
  songName?: string;
  artist?: string;
  year?: number;
}

const MusicCard: FC<Props> = ({
  onClick,
  className,
  src,
  songName,
  artist,
  year,
}) => {
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
          <img src={src} alt="song" className="w-full h-40 rounded-lg" />
          <FaPlay className="absolute text-red-500 w-9 h-9 bottom-3 right-3" />
        </div>
        <p className="px-2 pt-3 font-semibold text-center text-white truncate">
          {songName}
        </p>
        <div className="flex justify-between px-1 py-2">
          <span className="text-sm text-white truncate">{artist}</span>
          <span className="pl-2 text-sm text-white">{year}</span>
        </div>
      </div>
    </>
  );
};

MusicCard.defaultProps = {
  src: "",
};

export default memo(MusicCard);
