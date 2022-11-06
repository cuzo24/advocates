import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home.jsx';
import Advocates from './pages/Advocates/Advocates.jsx';
import Advocate from './pages/Advocate/Advocate.jsx';

// Contexts
import { PageContextProvider } from './contexts/PageContext.jsx';

// Layout
import Navbar from './components/Navbar/Navbar.jsx';

// Styles
import './styles.css';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="advocates">
          <Route
            index
            element={
              <PageContextProvider key="advocates">
                <Advocates />
              </PageContextProvider>
            }
          />
          <Route
            path=":username"
            element={
              <PageContextProvider key="advocate">
                <Advocate />
              </PageContextProvider>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}