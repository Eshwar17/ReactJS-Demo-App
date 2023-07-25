import React, { useState } from "react";
import Video from "./components/Video";
import "./App.css";
import videoDB from './data/data'
import PlayButton from "./components/PlayButton";
import AddVideo from "./components/AddVideo";

const App = () => {
  const [videos,setVideos] = useState(videoDB);
  function addVideo(video) {
    setVideos([...videos,{...video,id:videos.length+1}])
  }
  
  return <>
  <AddVideo addVideo={addVideo}/><div className="app" onClick={()=>console.log("App component")}>
    {videos.map(video => <div><Video key={video.id} id={video.id} title={video.title} views={video.views} channel={video.channel} time={video.time} verified={video.verified}/><div><PlayButton onPlay={()=>console.log("Playing",video.title)} onPause={()=>console.log("Paused",video.title)}>Play</PlayButton></div></div>)}
    
  </div>
  </>;
};

export default App;
