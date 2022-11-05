import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';

export const Card = styled.div`
  position: relative;
  display: flex;
  border: 1px solid rgb(var(--clr-black) / 0.1);
  border-radius: 0.5rem;
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
    width: calc(2 * var(--fs-hero));
    height: auto;
    border-radius: 50%;
  }

  .card__body {
    position: relative;
    flex: 1;
    color: rgb(var(--clr-gray));
    word-break: break-all;
    hyphens: auto;
    padding: 3rem 1rem 1rem;
  }

  .card__title {
    font-size: var(--fs-lg);
    color: rgb(var(--clr-black));
  }

  @media screen and (${breakpoints['xs']}) {
    margin-top: 0;
    overflow: hidden;

    .card__figure {
      position: relative;
      left: 0;
      top: 0;
      transform: translateY(0);
      display: flex;
      width: min(200px, 50%);
    }

    .card__img {
      height: auto;
      width: 100%;
      object-fit: cover;
      border-radius: 0;
    }

    .card__body {
      word-break: normal;
      padding: 1rem 0.75rem;
    }
  }
  `;