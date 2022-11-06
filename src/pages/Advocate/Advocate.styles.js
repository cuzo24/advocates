import styled from "styled-components";
import { sizes, breakpoints } from '../../utils/breakpoints.js';

export const Container = styled.main`
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

export const AdvocateInfo = styled.div`
  margin-top: 2rem;

  .advocate__figure {
    display: flex;
    padding: 0;
    max-width: 25rem;
    margin: 0 auto;
    border-radius: 1rem;
    overflow: hidden;
  }

  .advocate__img {
    width: 100%;
    object-position: center;
    object-fit: cover;
  }

  @media screen and (min-width: 26rem) {
    display: flex;
    align-items: center;

    .advocate__figure {
      margin: 0 0.5rem 0 0;
      min-width: 10rem;
    }
  }
`;