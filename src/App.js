import React from 'react';
import HomePage from './components/pages/Home';
import BlogsPage from './components/pages/Blogs';
import ContactPage from './components/pages/Contact';
import NavBar from './components/pages/include/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/blogs" element={<BlogsPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;
