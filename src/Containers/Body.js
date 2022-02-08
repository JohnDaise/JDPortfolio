
import '../App.css';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Projects from '../Components/Projects';


function Body() {
  return (
      <div className="App-body">
          {/* TODO implement react router*/}
          <About/>
          <Projects />
          <Contact/>
      </div>
  );
}

export default Body;