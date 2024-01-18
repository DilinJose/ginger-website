import About from "./About/About";
import "./App.css";
import Blog from "./Blog/Blog";
import ChooseUs from "./ChooseUs/ChooseUs";
import Consultations from "./Consultations/Consultations";
import Designers from "./Designers/Designers";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";

function App() {
  return (
    <div className="main-card">
      <Header />
      <About />
      <div className="projects-div">
        <Projects />
      </div>
      <div className="chooseus-div">
        <ChooseUs />
      </div>
      <Services />
      <div className="blog-div">
        <Blog />
      </div>
      <div className="designers-div">
        <Designers />
      </div>
      <Consultations />
      <div className="footer-div"><Footer/></div>
      
    </div>
  );
}

export default App;
