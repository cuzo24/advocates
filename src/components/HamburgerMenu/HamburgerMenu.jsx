import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;

  list-style: none;

  margin: 0;
  padding: 0;

  transition: transform 350ms;

  li {
    padding-left: 1.125rem;
  }

  @media screen and (max-width: 47.9875rem) {
    position: fixed;
    top: 0;
    right: 0;

    flex-direction: column;

    padding: 3.5rem 0 3rem;
    width: 80%;
    max-width: 20rem;

    background-color: #0D2538;
    color: #D1D1F1;

    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

    li + li {
      padding-top: 1.25rem;
    }
  }

  @media screen and (min-width: 48rem) {
    align-items: center;
  }
`;

export default function HamburgerMenu({ open }) {
  return (
    <List open={open}>
      <li>Home</li>
      <li>About Us</li>
      <li>Sign In</li>
      <li>Sign Up</li>
    </List>
  );
}
