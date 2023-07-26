import React, { useState } from "react";
import "./App.css";
import videoDB from './data/data'
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

const App = () => {
  const [videos,setVideos] = useState(videoDB);
  function addVideo(video) {
    setVideos([...videos,{...video,id:videos.length+1}])
  }

  function deleteVideo(id) {
    setVideos(videos.filter(video=>video.id!==id))
    console.log(id);
  }
  
  return <>
  <AddVideo addVideo={addVideo}/><div className="app" onClick={()=>console.log("App component")}>
    <VideoList deleteVideo={deleteVideo} videos={videos}/>
    
  </div>
  </>;
};

export default App;
