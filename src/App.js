import React from 'react'
import Video from './components/Video'
import './App.css';

const App = () => {
  return (
    <div className='app'>
    <div>App</div>
    <Video title="ReactJS Tutorial" views={1000} channel="Eshwar Nagaraj" time={1}/>
    <Video title="ReactJS Tutorial" views={1000} channel="Eshwar Nagaraj" time={1}/>
    <Video title="ReactJS Tutorial" views={1000} channel="Eshwar Nagaraj" time={1}/>
    <Video title="ReactJS Tutorial" views={1000} channel="Eshwar Nagaraj" time={1}/>
    </div>
  )
}

export default App