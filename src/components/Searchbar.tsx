import { FC, InputHTMLAttributes, memo, useState } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Searchbar: FC<Props> = ({ className }) => {
  const [blur, setblur] = useState(true);
  const searchMusic = () => {
    // method to search for music...
  };

  let blurClass = "";

  if (blur) {
    blurClass = " w-2/3 h-9 py-1";
  } else {
    blurClass = " w-4/5 h-11 py-2";
  }

  return (
    <input
      type="text"
      name="search"
      placeholder="Search..."
      className={
        " py-1 px-5 placeholder-gray-400 rounded-lg outline-none bg-gray-50 " +
        className +
        blurClass
      }
      onFocus={() => {
        setblur(false);
      }}
      onBlur={() => {
        setblur(true);
      }}
      onChange={searchMusic}
    />
  );
};

Searchbar.defaultProps = {};

export default memo(Searchbar);
