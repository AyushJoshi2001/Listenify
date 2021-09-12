import { FC, InputHTMLAttributes, memo } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Searchbar: FC<Props> = ({ className }) => {
  //   const [focus, setFocus] = useState(false);
  //   let focusClass = "";

  //   if (focus) {
  //     focusClass = "h-10 w-2/3 py-2";
  //   } else {
  //     focusClass = "w-1/2 h-8 py-1";
  //   }

  return (
    <input
      type="text"
      name="search"
      placeholder="Search..."
      className={
        "md:w-2/3 h-8 sm:h-10 w-4/5 py-1 px-5 placeholder-gray-400 rounded-lg outline-none bg-gray-50 " +
        className
      }
      //   onFocus={() => {
      //     console.log("onFocus...", focus);
      //     setFocus(!focus);
      //   }}
    />
  );
};

Searchbar.defaultProps = {};

export default memo(Searchbar);
