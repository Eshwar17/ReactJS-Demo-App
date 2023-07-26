import React, { useState } from "react";
import Video from "./components/Video";
import "./App.css";
import videoDB from './data/data'
import PlayButton from "./components/PlayButton";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

const App = () => {
  const [videos,setVideos] = useState(videoDB);
  function addVideo(video) {
    setVideos([...videos,{...video,id:videos.length+1}])
  }
  
  return <>
  <AddVideo addVideo={addVideo}/><div className="app" onClick={()=>console.log("App component")}>
    <VideoList videos={videos}/>
    
  </div>
  </>;
};

export default App;
