import { useState, useEffect, useRef } from "react";
import { BiPlay, BiPause, BiVolume, BiVolumeMute } from "react-icons/bi";
import { motion } from "framer-motion";
import { MdFiberManualRecord } from "react-icons/md";

const Player = ({ url, title, description, logo }) => {
  const videoRef = useRef(null);
  const [showControl, setShowControl] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const container = useRef(null);
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true); // Track video playing state

  useEffect(() => {
    const video = videoRef.current;

    const updateTime = () => {
      setCurrentTime(video.currentTime);
      setDuration(video.duration);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPlaying(false);
        video.pause();
      } else {
        setIsPlaying(true);
        video.play();
      }
    };

    video.addEventListener("timeupdate", updateTime);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying); // Toggle play/pause state
  };

  const handleMute = () => {
    const video = videoRef.current;
    setMuted(!muted);
    video.muted = !muted;
  };

  return (
    <div
      ref={container}
      className="relative md:h-screen opacity-75 md:opacity-100 top-0 w-full"
    >
      <img
        src={logo}
        alt=""
        width={500}
        height={500}
        className="absolute z-10 aspect-auto w-[12vw] bottom-4 right-4 md:right-12"
      />
      <div className="flex bg-black fp-bg h-full">
        <div className="relative w-full h-full overflow-hidden">
          <motion.div className="w-full h-full">
            <video
              className="w-full object-cover rounded-md md:rounded-none h-full"
              ref={videoRef}
              muted={muted}
              autoPlay
              onContextMenu={(e) => e.preventDefault()}
              loop
              preload="auto"
              src={url}
            ></video>
          </motion.div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 flex gap-4 items-center px-2 md:px-8 w-full">
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
            className="btn group uppercase bg-transparent text-white font-light w-max text-xs hover:bg-red-600 outline-white outline-1 outline rounded-full border-none btn-sm"
          >
            <MdFiberManualRecord className="text-red-500 group-hover:text-white text-xl" />{" "}
            Summary
          </button>
        </div>
        <div className="z-10 text-white md:mb-2">
          <marquee direction="left" loop className="max-w-[12rem] font-light text-xs">
            {title}
          </marquee>
          <div className="text-xl flex items-center gap-2 w-full ">
            <button onClick={handlePlayPause}>
              {isPlaying ? <BiPause /> : <BiPlay />}
            </button>
            <input
              type="range"
              className="range-input"
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
