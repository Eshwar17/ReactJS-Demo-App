import React from "react";
import Video from "./components/Video";
import "./App.css";

const App = () => {
  let videos = [
    {
      id:1,
      title: "NodeJS tutorial",
      views: "12K",
      channel: "InternPixel",
      time: "2",
      verified: true,
    },
    {
      id:2,
      title: "ReactJS tutorial",
      views: "200K",
      channel: "Eshwar Nagaraj",
      time: "3",
      verified: false,
    },
    {
      id:3,
      title: "Java tutorial",
      views: "20K",
      channel: "InternPixel",
      time: "1",
      verified: true,
    },
  ];
  return <div className="app">
    {videos.map(video => <Video id={video.id} title={video.title} views={video.views} channel={video.channel} time={video.time} verified={video.verified}/>)}
  </div>;
};

export default App;
