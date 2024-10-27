import "./App.css";

//Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//Sections
import Home from "./Sections/Home";
import About from "./Sections/About";
import Projects from "./Sections/Project";
import Contact from "./Sections/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <div>
      <Footer />
      </div>
    </div>
  );
}

export default App;
