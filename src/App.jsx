import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DiagramEditor from './components/DiagramEditor';
import Navbar from './components/NavBar';
import Login from './pages/login';
import Register from "./pages/register"

import "./app.css"


function App() {
  return (
    <main className='main-container'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DiagramEditor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    </main>
  );
}

export default App;
