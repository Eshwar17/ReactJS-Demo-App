import React from 'react'
import './Video.css';

const Video = ({id,title,views,channel,time,verified,dispatch,editVideo}) => {
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