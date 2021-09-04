import { FC, memo } from "react";

interface Props {}

const Profile: FC<Props> = (props) => {
  return <div>this is profile page.</div>;
};

Profile.defaultProps = {};

export default memo(Profile);
