import { FC, memo, useEffect, useState } from "react";

interface Props {
  audio: HTMLAudioElement;
}

const Seekbar: FC<Props> = ({ audio }) => {
  // console.log(progress);
  const [progress, setProgress] = useState(0);

  const seekbarInterval = setInterval(() => {
    setProgress((audio.currentTime / audio.duration) * 100);
  }, 1000);

  if (progress >= 100) {
    clearInterval(seekbarInterval);
  }

  useEffect(() => {
    return () => {
      // console.log("seekbar unmount");
      clearInterval(seekbarInterval);
    };
  }, [audio]); // eslint-disable-line

  return (
    <div className="w-full h-1 bg-gray-300">
      <div className="h-1 bg-blue-500 " style={{ width: `${progress}%` }}></div>
    </div>
  );
};

Seekbar.defaultProps = {};

export default memo(Seekbar);
