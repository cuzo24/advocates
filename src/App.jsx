import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home.jsx';
import Advocates from './pages/Advocates.jsx';

// Styles
import './styles.css';

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="advocates" element={<Advocates />} />
      </Route>
    </Routes>
  );
}