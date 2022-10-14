import './App.css';
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Projects from './pages/Projects'


function App() {
  return (
    <>
      <Routes>
        <Route path='/About' element={<About />} />
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Resume' element={<Resume />} />
        <Route path='/Projects' element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
