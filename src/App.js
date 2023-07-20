import React from 'react'
import Video from './components/Video'
import './App.css';

const App = () => {
  let obj = {
    title:'NodeJS tutorial',
    views:'12K',
    channel:'InternPixel',
    time:'2',
    verified:true,
  }
  return (
    <div className='app'>
    <Video {...obj}/>
    <Video title="ReactJS Tutorial" views={12300} channel="Eshwar Nagaraj" time={1} verified={false}/>
    <Video title="ReactJS Tutorial" views={103450} channel="Eshwar Nagaraj" time={1} verified={false}/>
    <Video title="ReactJS Tutorial" views={"1K"} channel="Eshwar Nagaraj" time={1} verified={false}/>
    </div>
  )
}

export default App