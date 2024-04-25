import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'

//sites
import Home from "./sites/Home"
import About from './sites/About'
import Contact from './sites/Contact'
import Projects from './sites/Projects'

//components
import Navbar from './components/NavBar'


function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element= { <Home /> }></Route>
                <Route path="/about" element= { <About /> }></Route>
                <Route path="/projekte" element= { <Projects /> }></Route>                
                <Route path="/kontakt" element= { <Contact /> }></Route>

            </Routes>
        </Router>
    </div>
  );
}

export default App;
