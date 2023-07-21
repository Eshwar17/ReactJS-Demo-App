import React from "react";
import Video from "./components/Video";
import "./App.css";
import videos from './data/data'

const App = () => {
  
  return <div className="app">
    {videos.map(video => <Video key={video.id} id={video.id} title={video.title} views={video.views} channel={video.channel} time={video.time} verified={video.verified}/>)}
  </div>;
};

export default App;
