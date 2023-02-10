import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Social from './components/Social';
import Featured from './components/Featured';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

import {
  Routes,
  Route,
 } from "react-router-dom";
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import About from './pages/About';
import Error from './pages/Error';

function App() {
  return (
    <div className="app">
        <Topbar />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
        <Featured />
        <Social />
        <Newsletter />
        <Footer />
    </div>
  );
}

export default App;