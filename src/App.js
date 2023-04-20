import React, { useState, useRef }  from "react";

import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import data from "./utils.js";

import Library from "./components/Library"

function App() {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying,setIsPlaying]=useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };



  return (
    <div className="App">
      <h1> JukeJam</h1>
      <Song currentSong={currentSong}/>
      <Player 
      audioRef={audioRef}
      isPlaying={isPlaying}
      setIsPlaying={setIsPlaying}
      currentSong={currentSong}
      setSongInfo={setSongInfo}
      songInfo={songInfo}/>

      <Library songs={songs} setCurrentSong={setCurrentSong} />
      <audio
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;
