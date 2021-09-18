import { FC, memo } from "react";

interface Props {
  className?: string;
}

const InputBorder: FC<Props> = ({ className }) => {
  return (
    <input
      type="text"
      name="fname"
      className={"border border-gray-500 rounded-lg px-2 py-2 " + className}
    />
  );
};

InputBorder.defaultProps = {};

export default memo(InputBorder);
