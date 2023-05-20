import logo from './logo.svg';
import './App.css';
import Intro from "./components/Intro";
import Terrain from "./components/Terrain";

function App() {
  return (
    <div className="App">
      <div id="content">
        <Intro></Intro> 
      </div>
      <Terrain />
    </div>
  );
}

export default App;
