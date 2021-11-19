import { FC, memo } from "react";

interface Props {}

const NotFound: FC<Props> = (props) => {
  return (
    <div className="flex items-center justify-center min-h-screen text-4xl font-semibold bg-red-500">
      Page Not Found
    </div>
  );
};

NotFound.defaultProps = {};

export default memo(NotFound);
