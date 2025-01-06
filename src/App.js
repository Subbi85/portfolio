import posthog from 'posthog-js'

//sites
import Home from "./sites/Home"
import About from './sites/About'
import Contact from './sites/Contact'
import Portfolio from './sites/Portfolio'
import Experience from './sites/Experience'
import CV from './sites/CV'
import Footer from './sites/Footer'
import Cookiebanner from './components/Cookiebanner'

//components
import Navbar from './components/NavBar'
import { useState } from 'react'

function App() {

  const [lightTheme, setLightTheme] = useState(false)

  return (
    <div className="App scroll-smooth">
      <Navbar lightTheme={lightTheme} setLightTheme={setLightTheme} />
      <Home lightTheme={lightTheme}  />
      {posthog.has_opted_in_capturing() || posthog.has_opted_out_capturing ? null : <Cookiebanner />}
      <About lightTheme={lightTheme} />
      <Portfolio lightTheme={lightTheme} />
      <Experience lightTheme={lightTheme} />
      <CV lightTheme={lightTheme} />
      <Contact lightTheme={lightTheme} />
      <Footer lightTheme={lightTheme} />
    </div>
  );
}

export default App;
