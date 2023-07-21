import React from "react";
import Video from "./components/Video";
import "./App.css";
import videos from './data/data'
import PlayButton from "./components/PlayButton";

const App = () => {
  
  return <><div className="app" onClick={()=>console.log("App component")}>
    {videos.map(video => <div><Video key={video.id} id={video.id} title={video.title} views={video.views} channel={video.channel} time={video.time} verified={video.verified}/><div><PlayButton onPlay={()=>console.log("Playing",video.title)} onPause={()=>console.log("Paused",video.title)}>Play</PlayButton></div></div>)}
    
  </div>
  </>;
};

export default App;
