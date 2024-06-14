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

function App() {
  return (
    <div className="App scroll-smooth">
        <Navbar />
        <Home />
        {posthog.has_opted_in_capturing() || posthog.has_opted_out_capturing ? null : <Cookiebanner />}
        <About />
        <Portfolio />
        <Experience />
        <CV />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
