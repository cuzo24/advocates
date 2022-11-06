import styled from 'styled-components';

export const Button = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  background-color: rgb(var(--clr-peach) / 0.25);
  color: var(--clr-light-gray);
  border-radius: 0.1875rem;
  overflow: hidden;
  cursor: ${props => props.active ? 'auto' : 'pointer'};

  .pagination-button__number {
    font-size: 0.875rem;
    z-index: 1;
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
`;