import { FC, memo } from "react";
import owner from "../../img/owner.jpeg";

interface Props {}

const About: FC<Props> = (props) => {
  return (
    <div className="" style={{ minHeight: "80vh" }}>
      <div className="pb-10"></div>
      <div className="flex flex-col items-center justify-center w-4/5 px-5 py-20 mx-auto space-y-10 bg-gray-300 divide-black rounded-lg shadow-lg md:divide-x-2 md:space-y-0 md:flex-row">
        <div className="flex items-center flex-shrink-0 md:pr-10 ">
          <img className="w-40 h-40 rounded-lg " src={owner} alt="owner" />
        </div>
        <p className="pl-10">
          <span className="text-lg font-semibold">I am Ayush Joshi.</span> Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur quos
          fuga ab nihil. Perferendis maxime corrupti omnis dolor consectetur
          aspernatur eos asperiores nihil. Ducimus a hic ea labore repudiandae
          quo doloribus omnis amet, molestiae totam tenetur nulla? Voluptates
          animi deserunt magnam quasi sed temporibus officia quam cupiditate,
          quia minima, esse consequatur aliquid? Pariatur quidem molestias
          dolorum quis voluptatum quas explicabo odit beatae sit assumenda
          nulla, deleniti in cumque culpa nobis adipisci libero corporis, vitae
          commodi eligendi rerum. Odit facilis laborum odio, qui earum voluptas
          cum temporibus, quia nostrum beatae, dolorem assumenda enim veritatis
          fuga sequi eius veniam aspernatur esse? Fuga.
        </p>
      </div>
    </div>
  );
};

About.defaultProps = {};

export default memo(About);
