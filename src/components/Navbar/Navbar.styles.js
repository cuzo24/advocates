import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem 2rem;
  background-color: rgb(var(--clr-peach) / 0.95);
`;

export const Button = styled.button`
  color: rgb(240, 237, 242);
  font-size: 1rem;
  padding: 0.5rem 1.25rem;
  margin-right: 0.5rem;
  background-color: rgb(82, 80, 84);
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      background-color: rgb(100, 20, 60);
    }
  }
`;