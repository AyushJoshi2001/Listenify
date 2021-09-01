import { FC, memo } from "react";

interface Props {}

const Signup: FC<Props> = (props) => {
  return <div>this is signup page.</div>;
};

Signup.defaultProps = {};

export default memo(Signup);
