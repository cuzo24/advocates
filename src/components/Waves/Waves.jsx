import React from 'react';

import { WaveWrapper } from './Waves.styles.js';

export default function Waves(props) {
  return (
    <WaveWrapper type={props.type}>
      <svg viewBox="0 0 1200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        {props.type === 1 &&
          <path fillRule="evenodd" clipRule="evenodd" d="M0 0L50 60C100 120 200 240 300 246C400 252 500 144 600 102C700 60 800 84 900 84C1000 84 1100 60 1150 48L1200 36V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0Z" fill="#0099FF"/>
        }
        {props.type === 2 &&
          <path fillRule="evenodd" clipRule="evenodd" d="M0 0L50 30C100 60 200 120 300 126C400 132 500 84 600 78C700 72 800 108 900 132C1000 156 1100 168 1150 174L1200 180V180H1150C1100 180 1000 180 900 180C800 180 700 180 600 180C500 180 400 180 300 180C200 180 100 180 50 180H0V0Z" fill="#0099FF" />
        }
        {props.type === 3 &&
          <path fillRule="evenodd" clipRule="evenodd" d="M0 108L50 90C100 72 200 36 300 18C400 0 500 0 600 12C700 24 800 48 900 90C1000 132 1100 192 1150 222L1200 252V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V108Z" fill="#0099FF" />
        }
        {props.type === 4 &&
          <path fillRule="evenodd" clipRule="evenodd" d="M0 144L67 156C133 168 267 192 400 204C533 216 667 216 800 180C933 144 1067 72 1133 36L1200 0V252H1133C1067 252 933 252 800 252C667 252 533 252 400 252C267 252 133 252 67 252H0V144Z" fill="#0099FF" />
        }
        {props.type === 5 &&
          <path fillRule="evenodd" clipRule="evenodd" d="M0 0L50 6C100 12 200 24 300 78C400 132 500 228 600 258C700 288 800 252 900 240C1000 228 1100 240 1150 246L1200 252V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0Z" fill="#0099FF"/>
        }
        {props.type === 6 &&
          <path fillRule="evenodd" clipRule="evenodd" d="M0 0L50 54C100 108 200 216 300 264C400 312 500 300 600 246C700 192 800 96 900 90C1000 84 1100 168 1150 210L1200 252V360H1150C1100 360 1000 360 900 360C800 360 700 360 600 360C500 360 400 360 300 360C200 360 100 360 50 360H0V0Z" fill="#0099FF"/>
        }
      </svg>
    </WaveWrapper>
  );
}
