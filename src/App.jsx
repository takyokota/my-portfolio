import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';
import { ProjectContextProvider } from './context/ProjectContext';

function App() {
  return (
    <ProjectContextProvider>
      <Router>
        <Routes>
          <Route exact path='/my-portfolio/contact' element={<Contact />} />
          <Route exact path='/my-portfolio/about' element={<About />} />
          <Route exact path='/my-portfolio' element={<Home />} />
        </Routes>
      </Router>
    </ProjectContextProvider>
  );
}

export default App;
