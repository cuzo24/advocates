import styled, { css } from 'styled-components';
import { breakpoints } from '../../utils/breakpoints.js';

export const Button = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 2rem;
  background-color: rgb(var(--clr-peach) / 0.25);
  border-radius: 0.1875rem;
  overflow: hidden;
  cursor: ${props => props.active ? 'auto' : 'pointer'};

  ${({ navigation, icon }) => css`
    width: ${navigation ? "0" : "2rem"};
    padding: ${navigation ? "0" : "0 0.25rem"};
    visibility: ${navigation ? "hidden" : "visible"};
    pointer-events: ${navigation ? "none" : "all"};
  `};

  .pagination-button__number,
  .pagination-button__text {
    font-size: min(var(--fs-sm), 1rem);
    z-index: 1;
  }

  .pagination-button__text {
    font-weight: 600;
  }

  .pagination-button__svg {
    display: flex;
    z-index: 1;

    svg {
      flex: 1;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 100%;

    width: 100%;
    height: 100%;
    background-color: rgb(var(--clr-peach));
    border-radius: 0.25rem;

    transform: ${props => props.active ? 'translateY(-100%)' : 'translateY(0)'};
    transition: transform 250ms ease-in;
  }

  &:hover {
    &::before {
      transform: translateY(-100%);
    }
  }

  @media screen and (${breakpoints.xs}) {
    ${({ navigation, available, icon }) => css`
    width: ${navigation && !icon ? "0" : "2rem"};
    padding: ${navigation && !icon ? "0" : "0 0.25rem"};
    visibility: ${
      navigation && !available
      ? "hidden"
      : icon || !navigation
        ? "visible"
        : "hidden"
    };
    pointer-events: ${
      navigation && !available
      ? "none"
      : icon || !navigation
        ? "all"
        : "none"
    };
  `};
  }

  @media screen and (${breakpoints.sm}) {
    ${({ navigation, available, icon }) => css`
      min-width: ${navigation && !icon ? "6rem" : "unset"};
      padding: ${navigation && !icon ? "0 1.25rem" : "0 0.25rem"};
      visibility: ${navigation && !available ? "hidden" : "visible"};
      pointer-events: ${navigation && !available ? "none" : "all"};
  `};
  }
`;