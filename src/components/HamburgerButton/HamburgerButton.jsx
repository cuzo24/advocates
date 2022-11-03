import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

// Hooks
import useOutsideClick from '../../hooks/useOutsideClick.jsx';

// Components
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu.jsx';

const StyledBurger = styled.div`
  position: fixed;
  top: 0.75rem;
  right: 1rem;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  width: 2rem;
  height: 2rem;

  cursor: pointer;

  div {
    width: 1.75rem;
    height: 0.25rem;
    border-radius: 100vw;
    transition: transform 350ms, opacity 250ms, background-color 250ms;

    ${({ open }) => css`
      background-color: ${open ? '#D1D1F1' : '#0D2538'};

      &:nth-child(1) {
        transform: ${open ? 'translateY(0.5rem) rotate(45deg)' : 'rotate(0)'};
      }

      &:nth-child(2) {
        transform: ${open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${open ? 0 : 1};
      }

      &:nth-child(3) {
        transform: ${open ? 'translateY(-0.5rem) rotate(-45deg)' : 'rotate(0)'};
      }
    `};
  }

  @media screen and (min-width: 48rem) {
    display: none;
  }
`;

export default function HamburgerButton() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function handleClickOutside() {
    setIsOpen(false);
  }

  const ref = useOutsideClick(handleClickOutside);

  return (
    <>
      <StyledBurger
        ref={ref}
        open={isOpen}
        onClick={handleClick}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
      <HamburgerMenu open={isOpen} />
    </>
  );
}
