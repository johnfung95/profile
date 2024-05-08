import React from "react";
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";
import { tracks } from "../../data/tracks";

const MusicPlayer = () => {
  return (
    <div className="w-full h-18 text-sm">
      <Player
        trackList={tracks}
        includeTags={false}
        includeSearch={false}
        showPlaylist={false}
        sortTracks={false}
        autoPlayNextTrack={true}
      />
    </div>
  );
};

export default MusicPlayer;
