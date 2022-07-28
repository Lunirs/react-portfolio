import "./App.css";
import NavigationBar from "./components/Navbar";
import Banner from "./components/Jumbo";
import Skill from "./components/Skill";
import Project from "./components/Project";
import About from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Banner />
      <Skill />
      <About />
      <Project />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
