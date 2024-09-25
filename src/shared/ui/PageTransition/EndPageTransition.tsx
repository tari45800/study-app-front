import styled, { keyframes } from 'styled-components';

export const EndPageTransition = () => {
  return <FillScreen />;
};

const fillAnimation = keyframes`
  0%{
    width: 200vw;
    height: 100vh;
    left: -10%;
  }

  100%{
    width: 200vw;
    height: 100vh;
    left: 100%;
  }
`;

const FillScreen = styled.div`
  background-color: var(--prime-color);
  position: fixed;
  top: 0;
  left: -10rem;
  z-index: 100;
  animation: ${fillAnimation} 1s forwards ease-in-out;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
