import "./App.css";
import Expertise from "./components/Expertise";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects.jsx";
import Technology from "./components/Technology";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Expertise />
      <Technology />
      <Projects />
      <Experience />
      <Footer />
    </>
  );
};

export default App;
