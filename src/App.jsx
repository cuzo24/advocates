import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home.jsx';
import Advocates from './pages/Advocates.jsx';

// Layout
import Navbar from './components/Navbar/Navbar.jsx';

// Styles
import './styles.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="advocates" element={<Advocates />} />
      </Route>
    </Routes>
  );
}