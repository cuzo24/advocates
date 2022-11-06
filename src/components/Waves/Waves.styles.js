import styled, { css } from 'styled-components';

export const WaveWrapper = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;

  svg {
    position: absolute;
    overflow: visible;

    ${({type}) => css`
      top: ${type % 2 ? '0' : 'unset'};
      bottom: ${type % 2 === 0 ? '0' : 'unset'};
    `};
  }

  path {
    fill: ${props => props.color || 'rgb(var(--clr-peach) / 0.15)'};
  }
`;