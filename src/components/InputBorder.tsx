import { FC, InputHTMLAttributes, memo } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const InputBorder: FC<Props> = ({ className }) => {
  return (
    <input
      className={
        "border border-gray-500 rounded-lg outline-none px-2 py-2 " + className
      }
    />
  );
};

InputBorder.defaultProps = {};

export default memo(InputBorder);
