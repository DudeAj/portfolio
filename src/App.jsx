import Topbar from "./Components/topbar/Topbar";
import Intro from "./Components/intro/Intro";
import Works from "./Components/works/Works";
import Portfolio from "./Components/portfolio/Portfolio";
import Testimonials from "./Components/testimonials/Testimonials";
import Contact from "./Components/contact/Contact";
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Works/>
        <Contact/>
      </div>
    </div>
  )
}
export default App;
