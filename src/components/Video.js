import React from 'react'
import './Video.css';

const Video = ({title,views,channel,time,verified}) => {
  return (
    <div className='container'>
        <div><img src="https://cdn.pixabay.com/photo/2018/05/04/20/01/website-3374825_1280.jpg"/></div>
        <h1>{title}</h1>
        <p>{channel} {verified && "☑️"}</p>
        <p>{views} views . {time} years ago</p>
    </div>
  )
}

export default Video