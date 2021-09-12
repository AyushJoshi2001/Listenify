import { FC, memo } from "react";

interface Props {
  className?: string;
}

const Playbar: FC<Props> = ({ className }) => {
  return (
    <div
      className={
        "z-10 rounded-t-lg h-24  w-full bg-gray-700 fixed bottom-0 " + className
      }
    ></div>
  );
};

Playbar.defaultProps = {};

export default memo(Playbar);
