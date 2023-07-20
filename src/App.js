
import './App.css';

function App() {
  let name = "React App";
  let className = "App-header";
  return (
    <div className={className}>
      {name}
      <Demo></Demo>
    </div>
  );
}

function Demo() {
  return (
    <div className="App-header">
      <h2>I am Demo</h2>
    </div>
  )
}

export default App;
