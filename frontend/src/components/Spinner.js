import React from 'react';
import styled, { keyframes } from 'styled-components';

const duration = '1.4s';
const offset = 187;

const rotator = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg);
`;

const StyledSpinner = styled.svg`
  animation: ${rotator} ${duration} linear infinite;
  grid-columns: 1 / -1;
  }
`;

const colors = keyframes`
  0% { stroke: #4285F4; }
  25% { stroke: #DE3E35; }
  50% { stroke: var(--yellow); }
  75% { stroke: #1B9A59; }
  100% { stroke: #4285F4; }
`;

const dash = keyframes`
  0% {
    stroke-dashoffset: ${offset};
  }
  50% {
  stroke-dashoffset: 47;
  transform:rotate(135deg);
  }
  100% {
  stroke-dashoffset: ${offset};
  transform:rotate(450deg);
  }
`;

const StyledCircle = styled.circle`
  stroke-width: 6px;
  stroke-linecap: round;
  stroke-dasharray: ${offset};
  stroke-dashoffset: 0;
  transform-origin: center;
  animation:
    ${dash} ${duration} ease-in-out infinite,
    ${colors} 5.2s ease-in-out infinite;
`;

const Spinner = () => {
  return (
    <StyledSpinner width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <StyledCircle fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30" />
    </StyledSpinner>
  );
};

export default Spinner;
