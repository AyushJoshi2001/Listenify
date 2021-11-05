import { FC, memo } from "react";

interface Props {
  className?: string;
}

const Footer: FC<Props> = ({ className }) => {
  return (
    <div
      className={"h-20 py-2 text-center text-white bg-gray-700 " + className}
    >
      <p>Listenify❤️... Made by Ayush Joshi.</p>
      <p>&copy;2021 all rights reserved.</p>
    </div>
  );
};

Footer.defaultProps = {};

export default memo(Footer);
