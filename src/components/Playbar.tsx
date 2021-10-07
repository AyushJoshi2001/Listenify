import { FC, memo } from "react";
// import { FaBackward, FaForward, FaPause, FaPlayCircle } from "react-icons/fa";
// import { ImLoop2 } from "react-icons/im";
import { Song } from "../models/Song";

interface Props {
  className?: string;
  song?: Song;
}

const Playbar: FC<Props> = ({ className, song }) => {
  // const [play, setPlay] = useState(true);

  // const handlePlay = () => {
  //   // const audioELement: AudioHTMLAttributes<HTMLAudioElement> = document.getElementById("audioElement");
  //   // const method = play ? "pause" : "play";
  //   // audioELement.onplay(method);
  //   setPlay(!play);
  // };

  return (
    <div
      className={
        "flex py-1 w-full bg-gray-700 mx-auto max-w-screen-2xl " + className
      }
    >
      {/* title */}
      <div className="flex justify-center px-5 space-x-2">
        <div className="flex items-center">
          <img
            className="flex-shrink-0 w-16 h-16"
            src={song!.Img_URL}
            alt="song"
          />
        </div>
        <div>
          <p className="text-xl font-semibold text-white">{song!.Song_Name}</p>
          <p className="text-sm font-semibold text-white">{song!.Year}</p>
        </div>
      </div>

      <div className="flex items-center justify-center h-full pt-2 space-x-10">
        <audio
          src={song!.Download_URL}
          id="audioElement"
          autoPlay
          controls
        ></audio>
        {/* <FaBackward className="w-10 h-10 text-white" />
        {play ? (
          <FaPause className="w-10 h-10 text-white" onClick={handlePlay} />
        ) : (
          <FaPlayCircle className="w-10 h-10 text-white" onClick={handlePlay} />
        )}
        <FaForward className="w-10 h-10 text-white" />
        <ImLoop2 className="text-white w-7 h-7" /> */}
      </div>
    </div>
  );
};

Playbar.defaultProps = {};

export default memo(Playbar);
