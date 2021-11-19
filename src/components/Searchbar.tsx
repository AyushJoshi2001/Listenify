import React, {
  FC,
  InputHTMLAttributes,
  memo,
  useContext,
  useState,
} from "react";
import { useHistory } from "react-router";
import queryContext from "../context/query.context";
import { GoSearch } from "react-icons/go";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Searchbar: FC<Props> = ({ className }) => {
  const [blur, setblur] = useState(true);
  const [search, setSearch] = useState("");
  const history = useHistory();
  const { setQuery } = useContext(queryContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const searchSongs = (e: React.FormEvent<HTMLFormElement>) => {
    // method to search for songs...
    e.preventDefault();
    setQuery(search);
    history.push("/home");
    // console.log("query: ", search);
  };

  let blurClass = "";

  if (blur) {
    blurClass = " w-1/3 h-9 py-1";
  } else {
    blurClass = " w-1/3 h-11 py-1";
  }

  return (
    <>
      <form className="flex justify-end w-full " onSubmit={searchSongs}>
        <input
          type="text"
          name="query"
          placeholder="Search..."
          value={search}
          className={
            " py-1 px-5 placeholder-gray-400 text-white rounded-lg outline-none bg-transparent " +
            className +
            blurClass
          }
          style={{ border: "1px solid #66BFBF" }}
          onFocus={() => {
            setblur(false);
          }}
          onBlur={() => {
            setblur(true);
          }}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="py-1 ml-2 text-sm text-white rounded-lg sm:px-2"
        >
          <GoSearch className="w-5 h-5" />
        </button>
      </form>
    </>
  );
};

Searchbar.defaultProps = {};

export default memo(Searchbar);
