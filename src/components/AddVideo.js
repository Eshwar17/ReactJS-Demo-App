import { useContext, useEffect, useState } from 'react';
import './AddVideo.css'
import VideoDispatchContext from '../context/VideoDispatchContext';

const initialState = 
    {
        title:"",
        views:"",
        channel: "InternPixel",
        time: "2",
        verified: true,
      }

function AddVideo({editableVideo}) {
    const [video, setVideo] = useState(initialState)
    const dispatch = useContext(VideoDispatchContext)
    function handleClick(e) {
        e.preventDefault()
        if(editableVideo){
            dispatch({type:'UPDATE',payload:video});
        }else{
            dispatch({type:'ADD',payload:video});
        }
        setVideo(initialState)
    }
    function handleChange(e) {
        setVideo({
            ...video,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        if(editableVideo){
            setVideo(editableVideo)
        }
    },[editableVideo])
    return (
        <form>
            <input type="text" name='title' value={video.title} onChange={handleChange} placeholder="title"/>
            <input type="text" name='views' value={video.views} onChange={handleChange} placeholder="views"/>
            <button onClick={handleClick}>{editableVideo?'Edit':'Add'} Video</button>
        </form>
    )
}

export default AddVideo;