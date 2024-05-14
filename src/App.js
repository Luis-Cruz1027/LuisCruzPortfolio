import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
