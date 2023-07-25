import { useState } from 'react';
import './AddVideo.css'

const initialState = 
    {
        title:"",
        views:"",
        channel: "InternPixel",
        time: "2",
        verified: true,
      }

function AddVideo({addVideo}) {
    const [video, setVideo] = useState(initialState)
    function handleClick(e) {
        e.preventDefault()
        addVideo(video);
    }
    function handleChange(e) {
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })
    }
    return (
        <form>
            <input type="text" name='title' value={video.title} onChange={handleChange} placeholder="title"/>
            <input type="text" name='views' value={video.views} onChange={handleChange} placeholder="views"/>
            <button onClick={handleClick}>Submit</button>
        </form>
    )
}

export default AddVideo;