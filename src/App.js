import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'

//sites
import Home from "./sites/Home"
import About from './sites/About'
import Contact from './sites/Contact'
import Portfolio from './sites/Portfolio'
import Experience from './sites/Experience'
import CV from './sites/CV'

//components
import Navbar from './components/NavBar'


function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/#home" element= { <Home /> }></Route>
                <Route path="/#about" element= { <About /> }></Route>
                <Route path="/projekte" element= { <Portfolio /> }></Route>                
                <Route path="/kontakt" element= { <Contact /> }></Route>

            </Routes>
        </Router>
        <Home />
        <About />
        <Portfolio />
        <Experience />
        < CV />
    </div>
  );
}

export default App;