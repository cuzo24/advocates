import styled from 'styled-components';

import { sizes, breakpoints } from '../../utils/breakpoints.js';

export const Wrapper = styled.div`
  background-color: rgb(var(--clr-black));
  padding-block: 1.25rem;

  .breadcrumb-item {
    color: rgb(var(--clr-white));
    padding-inline: 0.5rem;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }
  }

  .link {
    position: relative;
    text-decoration: none;
    border-right: 2px solid rgb(var(--clr-white));

    &::before,
    &::after {
      content: "";
      position: absolute;
      background-color: rgb(var(--clr-peach));
    }

    &::before {
      --width: 2px;

      right: calc(-1 * var(--width));
      top: 0;
      height: 100%;
      width: var(--width);
      transform-origin: top center;
      transition: transform 350ms ease-out 350ms;
      transform: scaleY(0);
    }

    &::after {
      --height: 2px;

      bottom: 0;
      right: 0;
      width: 50%;
      height: var(--height);
      transform-origin: right bottom;
      transform: scaleX(0);
      transition: transform 300ms ease-in 0ms;
    }

    @media (hover: hover) {
      &:hover {
        color: rgb(var(--clr-peach));

        &::before {
          transform: scaleY(1);
          transform-origin: top bottom;
          transition: transform 250ms ease-in;
        }

        &::after {
          transform: scaleX(1);
          transition: transform 250ms ease-in 250ms;
        }
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 0 0.5rem;

  @media screen and (${breakpoints['xs']}) {
    padding: 0 0.75rem;
  }

  @media screen and (${breakpoints['sm']}) {
    padding: 0 1rem;
  }

  @media screen and (${breakpoints['md']}) {
    padding: 0;
    width: 90%;
    max-width: ${sizes['3xl']};
    margin: 0 auto;
  }
`;