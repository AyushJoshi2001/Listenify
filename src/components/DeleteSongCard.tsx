import { FC, memo } from "react";
import { MdDeleteForever } from "react-icons/md";

interface Props {
  imageUrl: string;
  songName: string;
  Artist: string;
  Year: number;
  onClick: () => void;
  className?: string;
}

const SongCard: FC<Props> = ({
  imageUrl,
  songName,
  Artist,
  Year,
  onClick,
  className,
}) => {
  return (
    <div
      className={
        "flex justify-between flex-shrink-0 px-2 py-2 mt-2 mb-2 ml-2 space-x-5 border border-white rounded-lg w-72 " +
        className
      }
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <img className="w-12 h-12" src={imageUrl} alt="song pic" />
        </div>
        <div className="flex flex-col pl-3">
          <div>
            <p className="">{songName}</p>
            <div className="flex space-x-3">
              <p className="truncate">{Artist}</p>
              <p>{Year}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex items-center cursor-pointer hover:text-red-500"
        onClick={onClick}
      >
        <MdDeleteForever className="h-7 w-7" />
      </div>
    </div>
  );
};

SongCard.defaultProps = {};

export default memo(SongCard);
