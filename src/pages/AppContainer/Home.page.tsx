import { FC, memo } from "react";
import { useHistory } from "react-router";
import MusicCard from "../../components/MusicCard";
import Playbar from "../../components/Playbar";

interface Props {}

const Home: FC<Props> = (props) => {
  const history = useHistory();
  return (
    <div className="w-full min-h-screen pt-10">
      {/* <p className="px-5 text-4xl font-bold">RECENT SONGS</p> */}
      <p className="px-5 text-4xl font-bold">ALL SONGS</p>
      <div className="flex flex-wrap">
        <MusicCard
          onClick={() => {
            history.push("/play/musicId");
          }}
          className="flex-wrap flex-shrink-0"
        />
        <MusicCard
          onClick={() => {
            history.push("/play/musicId");
          }}
          className="flex-shrink-0"
        />
        <MusicCard
          onClick={() => {
            history.push("/play/musicId");
          }}
          className="flex-wrap flex-shrink-0"
        />
      </div>

      <Playbar />
    </div>
  );
};

Home.defaultProps = {};

export default memo(Home);
