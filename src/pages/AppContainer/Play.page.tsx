import { FC, memo } from "react";

interface Props {}

const Play: FC<Props> = (props) => {
  return <div>play song.</div>;
};

Play.defaultProps = {};

export default memo(Play);
