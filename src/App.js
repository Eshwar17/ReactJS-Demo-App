import React, { useState, useReducer } from "react";
import "./App.css";
import videoDB from './data/data'
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import VideoDispatchContext from "./context/VideoDispatchContext";

const App = () => {
  const [editableVideo,setEditableVideo] = useState(null);
  // const [videos,setVideos] = useState(videoDB);
  function videoReducer(videos, action) {
    switch(action.type){
      case 'ADD':
        return [...videos,{...action.payload,id:videos.length+1}];
      case 'DELETE':
        return videos.filter(video=>video.id!==action.payload)
      case 'UPDATE':
        const index = videos.findIndex(v=>v.id===action.payload.id);
        const newVideos = [...videos]
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  }

  const [videos,dispatch] = useReducer(videoReducer,videoDB)
  

  function editVideo(id) {
    setEditableVideo(videos.find(video=>video.id===id))
    console.log(id);
  }

  
  return <>
  <VideoDispatchContext.Provider value={dispatch}>
  <div className="app" onClick={()=>console.log("App component")}>
  <AddVideo editableVideo={editableVideo}/>
    <VideoList editVideo={editVideo} videos={videos}/>
    
  </div>
  </VideoDispatchContext.Provider>
  </>;
};

export default App;
