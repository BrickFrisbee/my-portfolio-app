import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <div className="bg-[#2a3439] h-52"/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
