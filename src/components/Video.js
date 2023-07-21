import React from 'react'
import './Video.css';

const Video = ({title,views,channel,time,verified}) => {
  return (
    <div className='container'>
        <div><img src="https://picsum.photos/id/237/200/300"/></div>
        <h1>{title}</h1>
        <p>{channel} {verified && "☑️"}</p>
        <p>{views} views . {time} years ago</p>
    </div>
  )
}

export default Video