import Video from "./Video";
import PlayButton from "./PlayButton";
function VideoList({videos,dispatch, editVideo}) {
  return (
    <>
      {videos.map((video) => (
        <div>
          <Video
            key={video.id}
            id={video.id}
            title={video.title}
            views={video.views}
            channel={video.channel}
            time={video.time}
            verified={video.verified}
            dispatch={dispatch}
            editVideo={editVideo}
          />
          <div>
            <PlayButton
              onPlay={() => console.log("Playing", video.title)}
              onPause={() => console.log("Paused", video.title)}
            >
              Play
            </PlayButton>
          </div>
        </div>
      ))}
    </>
  );
}

export default VideoList;
