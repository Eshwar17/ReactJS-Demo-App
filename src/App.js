import React, { useState } from "react";
import Video from "./components/Video";
import "./App.css";
import videoDB from './data/data'
import PlayButton from "./components/PlayButton";

const App = () => {
  const [videos,setVideos] = useState(videoDB);
  function handleClick(e) {
    e.stopPropagation();
    setVideos([...videos,{
      id:videos.length+1,
      title: "Java tutorial",
      views: "12K",
      channel: "InternPixel",
      time: "2",
      verified: true,
    }]);
  }
  
  return <>
  <button onClick={handleClick}>Add Video</button><div className="app" onClick={()=>console.log("App component")}>
    {videos.map(video => <div><Video key={video.id} id={video.id} title={video.title} views={video.views} channel={video.channel} time={video.time} verified={video.verified}/><div><PlayButton onPlay={()=>console.log("Playing",video.title)} onPause={()=>console.log("Paused",video.title)}>Play</PlayButton></div></div>)}
    
  </div>
  </>;
};

export default App;
