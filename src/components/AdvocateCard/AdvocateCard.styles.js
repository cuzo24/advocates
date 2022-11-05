import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid rgb(var(--clr-black) / 0.1);
  border-radius: 0.5rem;
  padding: 3rem 1rem 1rem;
  margin: 1.75rem 0 0;
  color: rgb(var(--clr-black));

  .card__figure {
    position: absolute;
    left: 1rem;
    top: 3rem;
    transform: translateY(-100%);
    margin: 0;
    padding: 0;
  }

  .card__img {
    width: 4rem;
    height: auto;
    border-radius: 50%;
  }

  @media screen and (min-width: 23.5rem) {
    padding: 1rem;
    margin: 0;

    .card__figure {
      position: static;
      transform: translateY(0);
    }
  }
`;