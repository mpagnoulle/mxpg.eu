import React, { useState, useEffect } from "react";
import { useAnimate, easeOut } from "framer-motion";
import { SiSpotify } from "@icons-pack/react-simple-icons";

const NowPlaying = () => {
  const [song, setSong] = useState({});
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const fetchSongInfo = async () => {
      try {
        const response = await fetch('https://0t9b640kq8.execute-api.eu-west-3.amazonaws.com/v1/current');
        const updatedSongInfo = await response.json();

        if (
          song.songTitle !== updatedSongInfo.songTitle ||
          song.artistName !== updatedSongInfo.artistName ||
          song.isPlaying !== updatedSongInfo.isPlaying
        ) {
          const img = new Image();
          img.src = updatedSongInfo.coverURL;
          await img.decode();

          await animate(scope.current, { opacity: 0 }, { duration: 0.25, ease: "easeOut" });
          //currentSong = updatedSongInfo;
          setSong(updatedSongInfo);
          
          await animate(scope.current, { opacity: 1}, { duration: 0.5, ease: "easeOut" }
          );
        }
      } catch (error) {
        console.error("Error fetching song info:", error);
      }
    };

    fetchSongInfo();

    const interval = setInterval(fetchSongInfo, 3000);
    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [song]);

  return (
    <div
      ref={scope}
      className="flex relative group items-center border opacity-0 overflow-hidden border-white border-opacity-40 bg-white bg-opacity-50 shadow-lg backdrop-blur-[0.5rem] shadow-black/[0.03] w-full sm:w-[26rem] rounded-xl dark:bg-gray-950 hover:ring-2 ring-[#1DB954] dark:border-gray-900/40 dark:bg-opacity-40 transition-shadow duration-300 ease-in-out cursor-pointer"
      onClick={() => {  window.open(song.externalURL, '_blank', 'noreferrer'); }}
    >
      <img
        src={song.coverURL}
        alt="Album Cover"
        className="rounded-lg m-1 z-10"
        style={{ height: "80px", width: "80px" }}
      />
      <div className="flex-1 z-10">
        {song.isPlaying ? (
          <p className="text-gray-700 dark:text-white/80 font-light text-xs mb-1">
            I&apos;m currently listening to
          </p>
        ) : (
          <p className="text-gray-700 dark:text-white/80 font-light text-xs mb-1">
            I last listened to
          </p>
        )}
        <p className="text-gray-700 dark:text-white/80 font-light text-base">
          {song.songTitle}
        </p>
        <p className="text-gray-700 dark:text-white/80 font-light text-sm">
          {song.artistName}
        </p>
      </div>
      <SiSpotify
        className="absolute group-hover:opacity-100 transition-opacity right-1 top-1 opacity-50"
        style={{ height: "20px", width: "20px", color: "#1DB954" }}
      />
    </div>
  );
};

export default NowPlaying;