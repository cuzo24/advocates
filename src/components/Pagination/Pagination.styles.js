import styled from 'styled-components';
import { breakpoints } from '../../utils/breakpoints';

export const WrapperTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 0.5rem;
  padding-top: 2rem;

  .button-prev {
    margin-right: auto;
  }

  .button-next {
    margin-left: auto;
  }
`;

export const WrapperBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: min(var(--fs-sm), 1rem);
  padding: 0.25rem 0 2rem 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding-top: 2rem;

  @media screen and (${breakpoints.sm}){
    gap: 0.5rem;
  }
`;