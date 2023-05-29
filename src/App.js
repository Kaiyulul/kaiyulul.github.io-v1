// import logo from './logo.svg';
import './App.css';
import Intro from "./components/Intro";
import Terrain from "./components/Terrain";
import Socials from "./components/Socials";
import AboutMe from "./components/AboutMe";
// import Navigation from "./components/Navigation";

function App() {
  return (
    <div id="app">
      {/* <Navigation /> */}
      <div id="content">
        <Terrain />
        <Socials />
        <Intro />
        <AboutMe /> 
      </div>
    </div>
  );
}

export default App;
