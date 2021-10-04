import { FC, memo, useContext, useEffect } from "react";
import { useParams } from "react-router";
import Playbar from "../../components/Playbar";
import SongContext from "../../context/songs.context";
import { Song } from "../../models/Song";

interface Props {}

interface Id {
  musicId: string;
}

const Play: FC<Props> = (props) => {
  const songId: Id = useParams();
  // console.log(songId.musicId);
  const { songs } = useContext(SongContext);
  let currentSong: Song = {};
  songs.forEach((song) => {
    if (song.Song_ID === songId.musicId) {
      // console.log(song);
      currentSong = song;
    }
  });
  useEffect(() => {}, []);

  // console.log("current Song : ", currentSong);

  return (
    <div
      className="flex flex-col justify-between mx-5 md:flex-row max-w-screen-2xl"
      style={{ minHeight: "80vh" }}
    >
      <div className="relative w-full mr-10 space-y-10 bg-red-100 ">
        <div className="flex justify-center py-10">
          <img
            className="rounded-lg w-72 h-72"
            src={currentSong.Img_URL}
            alt="Song"
          />
        </div>
        <Playbar className="bottom-0 md:absolute" song={currentSong} />
      </div>
      <div
        className="flex-shrink-0 w-full pt-20 bg-red-100 border-black md:border-l-2 md:w-72"
        style={{ minHeight: "80vh" }}
      >
        <ul>
          <li>song</li>
          <li>song</li>
          <li>song</li>
          <li>song</li>
          <li>song</li>
        </ul>
      </div>
    </div>
  );
};

Play.defaultProps = {};

export default memo(Play);
