import React from 'react'
import './Video.css';

const Video = ({id,title,views,channel,time,verified}) => {
  return (
    <div className='container'>
        <div><img src={`https://picsum.photos/200/300/?blur=${id}`}/></div>
        <h1>{title}</h1>
        <p>{channel} {verified && "☑️"}</p>
        <p>{views} views . {time} years ago</p>
    </div>
  )
}

export default Video