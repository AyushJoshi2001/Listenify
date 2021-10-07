import { FC, memo } from "react";

interface Props {}

const Footer: FC<Props> = (props) => {
  return <div className="h-40">footer</div>;
};

Footer.defaultProps = {};

export default memo(Footer);
