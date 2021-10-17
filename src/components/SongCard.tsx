import { FC, memo } from "react";

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
        "flex flex-shrink-0 px-2 py-2 mt-2 mb-2 ml-2 space-x-5 border border-white rounded-lg cursor-pointer w-72 " +
        className
      }
      onClick={onClick}
    >
      <div className="">
        <img className="w-12 h-12" src={imageUrl} alt="song pic" />
      </div>
      <div className="flex flex-col">
        <p className="">{songName}</p>
        <div className="flex space-x-3">
          <p className="truncate">{Artist}</p>
          <p>{Year}</p>
        </div>
      </div>
    </div>
  );
};

SongCard.defaultProps = {};

export default memo(SongCard);
