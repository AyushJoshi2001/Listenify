import { FC, memo, useContext } from "react";
import { useHistory } from "react-router";
import MusicCard from "../../components/MusicCard";
import SongContext from "../../context/songs.context";

interface Props {}

const Home: FC<Props> = (props) => {
  const { songs } = useContext(SongContext);
  const history = useHistory();
  return (
    <div className="w-full min-h-screen pt-10">
      {/* <p className="px-5 text-4xl font-bold">RECENT SONGS</p> */}
      <p className="px-5 text-4xl font-bold">ALL SONGS</p>
      <div className="flex flex-wrap">
        {songs.map((song) => {
          return (
            <MusicCard
              onClick={() => {
                history.push("/play/" + song.Song_ID);
              }}
              className="flex-wrap flex-shrink-0"
              src={song.Img_URL}
              artist={song.Artist}
              key={song.Song_ID}
              songName={song.Song_Name}
              year={song.Year}
            />
          );
        })}
      </div>

      {/* <Playbar /> */}
    </div>
  );
};

Home.defaultProps = {};

export default memo(Home);
