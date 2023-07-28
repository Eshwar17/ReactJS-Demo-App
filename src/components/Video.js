import React, { useContext } from 'react'
import './Video.css';
import VideoDispatchContext from '../context/VideoDispatchContext';

const Video = ({id,title,views,channel,time,verified,editVideo}) => {
  const dispatch = useContext(VideoDispatchContext)
  return (
    <div className='container'>
    <button className="close" onClick={()=> dispatch({type:'DELETE',payload:id})}>X</button>
    <button className="edit" onClick={()=>editVideo(id)}>Edit</button>
        <div><img src={`https://picsum.photos/200/150/?blur=${id}`}/></div>
        <h1>{title}</h1>
        <p>{channel} {verified && "☑️"}</p>
        <p>{views} views . {time} years ago</p>
    </div>
  )
}

export default Video