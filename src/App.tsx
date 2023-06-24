import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Projects from './pages/projects';

export default function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
    </BrowserRouter>
  );
}
