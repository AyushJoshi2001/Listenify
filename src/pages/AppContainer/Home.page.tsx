import { FC, memo, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { fetchSongsData } from "../../api/auth";
import MusicCard from "../../components/MusicCard";
import SongContext from "../../context/songs.context";

interface Props {}

const Home: FC<Props> = (props) => {
  const { songs, setSongs } = useContext(SongContext);
  const history = useHistory();

  useEffect(() => {
    fetchSongsData().then((snapshot) => {
      if (snapshot.docs.length > 0) {
        let temp = snapshot.docs.reduce((prev: any, doc: any) => {
          return [...prev, doc.data()];
        }, []);
        setSongs(temp);
      }
    });
  }, []); // eslint-disable-line

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
              className="flex-wrap flex-shrink-0 "
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
