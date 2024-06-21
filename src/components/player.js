import { useState, useEffect, useRef } from "react";
import { BiPlay, BiPause, BiVolume, BiVolumeMute } from "react-icons/bi";
import { motion } from "framer-motion";
import { MdFiberManualRecord } from "react-icons/md";
import abby from "../assets/abby.png";
import { IoIosArrowDropright } from "react-icons/io";

const Player = ({ url, title, description }) => {
  const videoRef = useRef(null);
  const [showControl, setShowControl] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const container = useRef(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const updateTime = () => {
      setCurrentTime(video.currentTime);
      setDuration(video.duration);
    };

    video.addEventListener("timeupdate", updateTime);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const handlePlay = () => {
    const video = videoRef.current;
    video.paused ? video.play() : video.pause();
  };

  const handleMute = () => {
    const video = videoRef.current;
    setMuted(!muted);
    video.muted = !muted;
  };

  return (
    <div
      ref={container}
      className="relative  md:h-screen opacity-75 md:opacity-100   top-0 w-full bg-black "
    >
      <img
        src={abby}
        alt=""
        width={300}
        height={300}
        className="absolute z-10 w-[3rem] md:w-[6rem] bottom-4 right-4 md:right-12"
      />
      <div className="flex h-full">
        <div className="relative w-full h-full overflow-hidden">
          <motion.div className="w-full h-full">
            <video
              className="w-full object-cover rounded-md md:rounded-none  h-full"
              ref={videoRef}
              muted
              autoPlay
              onContextMenu={(e) => e.preventDefault()}
              loop
              preload="auto"
              src={url}
            ></video>
          </motion.div>
        </div>
      </div>

      {/* Desktop  */}
      <div className="absolute  bottom-4 flex gap-4 items-center px-2 md:px-8 w-full">
        <div className="w-max md:block hidden relative">
          {showControl && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="p-4 absolute text-justify bottom-16 space-y-4 bg-black/50 w-max outline outline-white flex flex-col text-white rounded-box max-w-xs text-xs"
            >
              {description}
            </motion.div>
          )}
          <button
            onClick={() => setShowControl(!showControl)}
            className="btn  group uppercase bg-transparent text-white font-light w-max text-xs hover:bg-red-600 outline-white outline-1 outline rounded-full border-none btn-sm"
          >
            <MdFiberManualRecord className="text-red-500 group-hover:text-white text-xl" />{" "}
            Summary
          </button>
        </div>
        <div className="z-10 text-white md:mb-2">
          <marquee
            direction="left"
            loop
            className="max-w-[12rem] font-light text-xs"
          >
            {title}
          </marquee>
          <div className="text-xl flex items-center gap-2 w-full ">
            <button onClick={handlePlay}>
              {videoRef.current?.paused ? <BiPlay /> : <BiPause />}
            </button>
            <input
              type="range"
              className="range-input "
              min={0}
              max={duration}
              value={currentTime}
              onChange={(e) => {
                videoRef.current.currentTime = e.target.value;
              }}
            />

            <button onClick={handleMute}>
              {muted ? <BiVolumeMute /> : <BiVolume />}
            </button>
          </div>
        </div>
      </div>

 
    </div>
  );
};

export default Player;
