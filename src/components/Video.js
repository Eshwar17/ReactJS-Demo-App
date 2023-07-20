import React from 'react'

const Video = ({title}) => {
  return (
    <div>{title}</div>
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