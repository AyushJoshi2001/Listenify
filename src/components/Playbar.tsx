import { FC, memo, useContext, useEffect, useState } from "react";
import { FiPlayCircle, FiPauseCircle, FiRepeat } from "react-icons/fi";
import { Song } from "../models/Song";
import { BiSkipNextCircle, BiSkipPreviousCircle } from "react-icons/bi";
import SongContext from "../context/songs.context";
import { useHistory } from "react-router";
import Seekbar from "./Seekbar";

interface Props {
  className?: string;
  song?: Song;
}

const Playbar: FC<Props> = ({ className, song }) => {
  const history = useHistory();
  const { songs } = useContext(SongContext);
  const [play, setPlay] = useState(false);
  const [loop, setLoop] = useState(false);
  const [audio] = useState(new Audio(song!.Download_URL));

  useEffect(() => {
    audio.addEventListener("ended", () => setPlay(true));
    setPlay(true);
    audio.play();

    return () => {
      // console.log("unmount playbar");
      audio.removeEventListener("ended", () => setPlay(false));
      audio.pause();
    };
  }, [audio]);

  const handlePlay = () => {
    setPlay(!play);
  };

  let loopClass = "";
  if (loop) {
    loopClass = "text-red-500";
  } else {
    loopClass = "text-white";
  }

  const moveToPrevious = () => {
    console.log("moveToNext...");
    const currentIndex = songs.indexOf(song!);
    const length = songs.length;
    let prevSong;
    if (currentIndex === 0) {
      prevSong = songs[length - 1];
    } else {
      prevSong = songs[currentIndex - 1];
    }
    const nextSongId = prevSong.Song_ID;
    console.log(nextSongId);
    audio.pause();
    history.push(`/play/${nextSongId}`);
    audio.src = prevSong.Download_URL!;
  };

  const moveToNext = () => {
    console.log("moveToNext...");
    const currentIndex = songs.indexOf(song!);
    let nextSong;
    if (currentIndex === songs.length - 1) {
      nextSong = songs[0];
    } else {
      nextSong = songs[currentIndex + 1];
    }
    const nextSongId = nextSong.Song_ID;
    console.log(nextSongId);
    audio.pause();
    history.push(`/play/${nextSongId}`);
    audio.src = nextSong.Download_URL!;
  };

  play ? audio.play() : audio.pause();

  return (
    <div className={"w-full " + className}>
      <Seekbar audio={audio} />
      <div className="flex w-full h-20 px-12 py-1 mx-auto bg-black max-w-screen-2xl ">
        {/* title */}
        <div className="flex justify-center space-x-2">
          <div className="flex items-center">
            <img
              className="flex-shrink-0 w-12 h-12 rounded-lg"
              src={song!.Img_URL}
              alt="song"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xl font-semibold text-white">
              {song!.Song_Name}
            </p>
            <p className="text-sm font-semibold text-white">{song!.Year}</p>
          </div>
        </div>

        <div className="flex items-center justify-center flex-1 h-full pt-2 -ml-20 space-x-10">
          <BiSkipPreviousCircle
            className="w-10 h-10 text-white cursor-pointer hover:text-blue-500"
            onClick={moveToPrevious}
          />
          {play ? (
            <FiPauseCircle
              className="w-10 h-10 text-white cursor-pointer hover:text-blue-500"
              onClick={handlePlay}
            />
          ) : (
            <FiPlayCircle
              className="w-10 h-10 text-white cursor-pointer hover:text-blue-500"
              onClick={handlePlay}
            />
          )}
          <BiSkipNextCircle
            className="w-10 h-10 text-white cursor-pointer hover:text-blue-500"
            onClick={moveToNext}
          />
        </div>
        <div className="flex space-x-5">
          <div className="flex items-center">
            <FiRepeat
              className={
                "cursor-pointer w-7 h-7 hover:text-blue-500 " + loopClass
              }
              onClick={() => {
                setLoop(!loop);
                audio.loop = loop;
              }}
            />
          </div>
          {/* <div className="flex items-center">
            <FiVolume2 className="text-white cursor-pointer w-7 h-7 hover:text-blue-500" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

Playbar.defaultProps = {};

export default memo(Playbar);
