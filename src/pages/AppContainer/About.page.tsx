import { FC, memo } from "react";

interface Props {}

const About: FC<Props> = (props) => {
  return <div>About page.</div>;
};

About.defaultProps = {};

export default memo(About);
