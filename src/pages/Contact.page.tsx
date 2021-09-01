import { FC, memo } from "react";

interface Props {}

const Contact: FC<Props> = (props) => {
  return <div>Contact-Us page.</div>;
};

Contact.defaultProps = {};

export default memo(Contact);
