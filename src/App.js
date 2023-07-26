import React, { useState } from "react";
import "./App.css";
import videoDB from './data/data'
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

const App = () => {
  const [videos,setVideos] = useState(videoDB);
  const [editableVideo,setEditableVideo] = useState(null);
  function addVideo(video) {
    setVideos([...videos,{...video,id:videos.length+1}])
  }

  function deleteVideo(id) {
    setVideos(videos.filter(video=>video.id!==id))
    console.log(id);
  }
  function editVideo(id) {
    setEditableVideo(videos.find(video=>video.id===id))
    console.log(id);
  }
  
  return <>
  <AddVideo addVideo={addVideo} editableVideo={editableVideo}/><div className="app" onClick={()=>console.log("App component")}>
    <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videos={videos}/>
    
  </div>
  </>;
};

export default App;
