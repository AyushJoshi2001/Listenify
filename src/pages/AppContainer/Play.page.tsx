import { FC, memo, useContext } from "react";
import { BsPlay } from "react-icons/bs";
import { useHistory, useParams } from "react-router";
import Footer from "../../components/Footer";
import Playbar from "../../components/Playbar";
import SongCard from "../../components/SongCard";
import SongContext from "../../context/songs.context";
import { Song } from "../../models/Song";

interface Props {}

interface Id {
  musicId: string;
}

const Play: FC<Props> = (props) => {
  const history = useHistory();
  const songId: Id = useParams();
  // console.log(songId.musicId);
  const { songs } = useContext(SongContext);
  let currentSong: Song = {};
  songs.forEach((song) => {
    if (song.Song_ID === songId.musicId) {
      currentSong = song;
    }
  });
  // console.log("current Song : ", currentSong);

  return (
    <div
      className="flex flex-col justify-between max-w-screen-2xl"
      style={{ minHeight: "80vh" }}
    >
      <div className="relative w-full mr-10 space-y-10 ">
        <div className="flex flex-col px-10 py-16 md:flex-row">
          <div className="pb-10 md:pr-10 md:pb-0">
            <img
              className="rounded-lg w-72 h-72"
              src={currentSong.Img_URL}
              alt="Song"
            />
          </div>
          <div>
            <p className="text-3xl font-semibold text-white">
              {currentSong.Song_Name}
            </p>
            <p className="pt-2 pb-5 text-xl font-semibold text-white">
              {currentSong.Year} | {currentSong.Artist}
            </p>
            <button className="px-5 py-1 text-lg text-white bg-blue-600 rounded-lg hover:bg-blue-400">
              <div className="flex">
                <div className="flex items-center pr-1">
                  <BsPlay className="w-6 h-6" />
                </div>
                <p>PLAY</p>
              </div>
            </button>
          </div>
        </div>
        <Playbar className="fixed bottom-0" song={currentSong} />
      </div>
      <div className="w-full px-10 mt-20 text-white">
        <p className="py-5 text-3xl font-semibold">Top Rated Songs</p>
        <div className="flex flex-wrap">
          {songs.map((song) => {
            return (
              <SongCard
                onClick={() => {
                  history.push("/play/" + song.Song_ID);
                }}
                songName={song.Song_Name!}
                imageUrl={song.Img_URL!}
                Artist={song.Artist!}
                Year={song.Year!}
                className="hover:bg-gray-700"
              />
            );
          })}
        </div>
      </div>
      <Footer className="mt-10" />
    </div>
  );
};

Play.defaultProps = {};

export default memo(Play);
