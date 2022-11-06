import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints.js';

export const Button = styled.div`
  position: ${props => props.navigation ? "absolute" : "relative"};

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${props => props.navigation ? "unset" : "2rem"};
  min-width: ${props => props.navigation ? "6rem" : "unset"};
  height: 2rem;
  padding: ${props => props.navigation ? "0 1.25rem" : "unset"};
  background-color: rgb(var(--clr-peach) / 0.25);
  color: var(--clr-light-gray);
  border-radius: 0.1875rem;
  overflow: hidden;
  cursor: ${props => props.active ? 'auto' : 'pointer'};
  visibility: ${props => props.navigation ? "hidden" : "visible"};
  pointer-events: ${props => props.navigation ? "none" : "all"};

  .pagination-button__number,
  .pagination-button__text {
    font-size: min(var(--fs-sm), 1rem);
    z-index: 1;
  }

  .pagination-button__text {
    font-weight: 600;
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

  @media screen and (${breakpoints.sm}) {
    visibility: ${props => props.navigation && !props.available ? "hidden" : "visible"};
    pointer-events: ${props => props.navigation && !props.available ? "none" : "all"};
    position: ${props => props.navigation && !props.available ? "absolute" : "relative"};
  }
`;