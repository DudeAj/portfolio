import Topbar from "./Components/topbar/Topbar";
import Intro from "./Components/intro/Intro";
import Works from "./Components/works/Works";
import Portfolio from "./Components/portfolio/Portfolio";
import Testimonials from "./Components/testimonials/Testimonials";
import Contact from "./Components/contact/Contact";
import Menu from "./Components/menu/Menu";
import './App.scss';

import { useState } from 'react';

const App = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Works />
        <Contact />
      </div>
    </div>
  )
}
export default App;
