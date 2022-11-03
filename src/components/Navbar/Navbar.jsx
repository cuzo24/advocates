import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

// Styled components
import { Container, Button } from './Navbar.styles.js';

// Components
import HamburgerButton from '../HamburgerButton/HamburgerButton.jsx';

export default function Navbar() {
  return (
    <>
      <Container>
        <HamburgerButton />
        {/* <header>
          <Button ref={ref} onClick={handleClick}>Increment</Button>
          {count}
        </header> */}
      </Container>
      <Outlet />
    </>
  );
}
