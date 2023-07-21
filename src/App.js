import React from "react";
import Video from "./components/Video";
import "./App.css";

const App = () => {
  let videos = [
    {
      title: "NodeJS tutorial",
      views: "12K",
      channel: "InternPixel",
      time: "2",
      verified: true,
    },
    {
      title: "ReactJS tutorial",
      views: "200K",
      channel: "Eshwar Nagaraj",
      time: "3",
      verified: false,
    },
    {
      title: "Java tutorial",
      views: "20K",
      channel: "InternPixel",
      time: "1",
      verified: true,
    },
  ];
  return <div className="app">
    {videos.map(video => <Video title={video.title} views={video.views} channel={video.channel} time={video.time} verified={video.verified}/>)}
  </div>;
};

export default App;
