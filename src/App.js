import React, { useState, useReducer } from "react";
import "./App.css";
import videoDB from './data/data'
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

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
  function addVideo(video) {
    
  }

  function deleteVideo(id) {
    dispatch({type:'DELETE',payload:id})
    // setVideos()
    // console.log(id);
  }
  function editVideo(id) {
    setEditableVideo(videos.find(video=>video.id===id))
    console.log(id);
  }

  
  return <>
  <AddVideo dispatch={dispatch} editableVideo={editableVideo}/><div className="app" onClick={()=>console.log("App component")}>
    <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videos={videos}/>
    
  </div>
  </>;
};

export default App;
