import { FC, memo } from "react";

interface Props {}

const Admin: FC<Props> = (props) => {
  return <div>this is admin page.</div>;
};

Admin.defaultProps = {};

export default memo(Admin);
