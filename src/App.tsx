// Environment
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



// Components
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import Recipes from './pages/Recipes';
import Settings from './pages/Settings';
import Footer from "./components/Footer";



function App() {
  return (
      <Router >
        <header>
          <NavBar />
        </header>
        <main >
          <div className='Container Main'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
  )
}

export default App;
