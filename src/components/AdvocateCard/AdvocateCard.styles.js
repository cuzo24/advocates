import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';

export const Card = styled.div`
  position: relative;
  display: flex;
  border: 1px solid rgb(var(--clr-black) / 0.1);
  border-radius: 0.5rem;
  margin: calc(0.5 * var(--fs-hero)) 0 0;
  color: rgb(var(--clr-black));

  .card__figure {
    position: absolute;
    left: 0.5rem;
    top: calc(1.5 * var(--fs-hero));
    transform: translateY(-100%);
    display: flex;
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
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    color: rgb(var(--clr-gray));
    hyphens: auto;
    word-break: break-all;
    padding: calc(2 * var(--fs-hero)) 0.5rem 0.5rem;
  }

  .card__title {
    font-size: var(--fs-md);
    color: rgb(var(--clr-black));
    max-width: 100%;
  }

  .card__twitter {
    display: inline-block;
    width: fit-content;
    margin-top: auto;
    border-radius: 50%;
    overflow: hidden;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.375rem;
    }

    &:focus-within, &:hover {
      background-color: rgb(var(--clr-light-gray) / 0.1);
    }
  }

  @media screen and (${breakpoints['lg']}) {
    margin-top: 0;
    overflow: hidden;

    .card__figure {
      position: relative;
      left: 0;
      top: 0;
      transform: translateY(0);
      align-items: center;
      justify-content: center;
      padding: 0.75rem 0.5rem;
    }

    .card__img {
      height: auto;
      width: calc(3 * var(--fs-hero));
      height: calc(3 * var(--fs-hero));
      object-fit: cover;
    }

    .card__body {
      position: static;
      padding: 0.75rem 0.5rem 0.75rem 0;
    }
  }
  `;