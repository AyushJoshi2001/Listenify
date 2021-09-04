import { FC, memo } from "react";

interface Props {}

const Home: FC<Props> = (props) => {
  return <div>This is home page.</div>;
};

Home.defaultProps = {};

export default memo(Home);
