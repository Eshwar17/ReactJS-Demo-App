import React from 'react'

const Video = (props) => {
  return (
    <div>{props.title}</div>
  )
}
function Thumb() {
    return (
        <div style={{backgroundColor:'red'}}>
            Thumb
        </div>
    )
}

export {Video, Thumb}