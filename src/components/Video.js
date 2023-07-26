import React from 'react'
import './Video.css';

const Video = ({id,title,views,channel,time,verified,deleteVideo}) => {
  return (
    <div className='container'>
    <button className="close" onClick={()=> deleteVideo(id)}>X</button>
    <button className="edit">Edit</button>
        <div><img src={`https://picsum.photos/200/150/?blur=${id}`}/></div>
        <h1>{title}</h1>
        <p>{channel} {verified && "☑️"}</p>
        <p>{views} views . {time} years ago</p>
    </div>
  )
}

export default Video