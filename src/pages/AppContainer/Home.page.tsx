import { FC, memo, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { fetchSongsData } from "../../api/auth";
import MusicCard from "../../components/MusicCard";
import queryContext from "../../context/query.context";
import SongContext from "../../context/songs.context";
import { Song } from "../../models/Song";

interface Props {}

const Home: FC<Props> = (props) => {
  const { songs, setSongs } = useContext(SongContext);
  const { query } = useContext(queryContext);
  const history = useHistory();
  console.log("query: ", query);

  useEffect(() => {
    fetchSongsData().then((snapshot) => {
      if (snapshot.docs.length > 0) {
        let temp: Song[] = snapshot.docs.reduce((prev: any, doc: any) => {
          return [...prev, doc.data()];
        }, []);

        // if query is empty then show all songs else show queried songs.
        if (query.length > 0) {
          temp = temp.filter((song) => {
            return query === song.Song_Name; // change it with regular expression.
          });
        }
        setSongs(temp);
      }
    });
    // console.log("searching...");
  }, [query]); // eslint-disable-line

  return (
    <div className="w-full min-h-screen pt-16">
      {/* <p className="px-5 text-4xl font-bold">RECENT SONGS</p> */}
      <p className="px-10 font-mono text-2xl font-thin text-white">ALL SONGS</p>
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
