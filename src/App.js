import logo from './logo.svg';
import './App.css';
import Intro from "./components/Intro";
import Terrain from "./components/Terrain";
import Socials from "./components/Socials";
// import Navigation from "./components/Navigation";



function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <div id="content">
        <Socials />
        <Intro /> 
      </div>
      <Terrain />
    </div>
  );
}

export default App;
