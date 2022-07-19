import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
 
import Header from './components/Header/Header';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
 

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header />
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
           
         </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
