import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DiagramEditor from './components/DiagramEditor';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Login from './pages/login';
import Register from "./pages/register"
import AboutUs from './pages/about';
import ContactUs from './pages/contactUs';
import PrivacyPolicy from './pages/privacy';
import PricingPage from './pages/pricing';
import "./App.css"


function App() {
  return (
    <main className='main-container'>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DiagramEditor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
      <Footer/>
    </Router>
    </main>
  );
}

export default App;
