import { FC, memo } from "react";
import owner from "../../img/ayush.jpg";

interface Props {}

const About: FC<Props> = (props) => {
  return (
    <div className="" style={{ minHeight: "80vh" }}>
      <div className="pb-10"></div>
      <div className="flex flex-col items-center justify-center w-4/5 px-5 py-20 mx-auto space-y-10 text-white bg-gray-500 divide-black rounded-lg shadow-lg bg-opacity-30 md:divide-x-2 md:space-y-0 md:flex-row">
        <div className="flex items-center flex-shrink-0 md:pr-10 ">
          <img className="w-40 h-40 rounded-lg " src={owner} alt="owner" />
        </div>
        <div className="pl-10">
          <div className="flex space-x-2">
            <p>Name:</p>
            <span className="text-lg font-semibold">Ayush Joshi</span>
          </div>

          <div className="flex space-x-2">
            <p>Email :</p>
            <a href="mailto: devvrat.sharma_cs19@gla.ac.in">
              ayush.joshi_cs19@gla.ac.in
            </a>
          </div>
          <div className="flex space-x-2">
            <p>github:</p>
            <a
              href="https://github.com/Ayushjoshi2001"
              rel="noreferrer"
              target="_blank"
            >
              Ayushjoshi2001
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

About.defaultProps = {};

export default memo(About);
