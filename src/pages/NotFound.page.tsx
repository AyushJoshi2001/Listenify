import { FC, memo } from "react";

interface Props {}

const NotFound: FC<Props> = (props) => {
  return (
    <div className="min-h-screen bg-red-100">
      the page you are looking for does not found.
    </div>
  );
};

NotFound.defaultProps = {};

export default memo(NotFound);
