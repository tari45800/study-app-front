import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

export const StartPageTransition = () => {
  const navigate = useNavigate();
  const fillScreenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 페이지 이동 함수
    const handleAnimationEnd = () => {
      navigate('/timerPage');
    };

    const element = fillScreenRef.current;
    element?.addEventListener('animationend', handleAnimationEnd);

    return () => {
      element?.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [navigate]);

  return (
    <FillScreen ref={fillScreenRef} className="FillScreen">
      <FontAwesomeIcon icon={faPlane} className="plane-icon" />
      <FontAwesomeIcon icon={faPlane} className="plane-icon-shadow" />
    </FillScreen>
  );
};

const fillAnimation = keyframes`
  0% {
    width: 0;
    height: 100vh;
    left: 0;
  }

  50%{
    width: 50vw;
    height: 100vh;
    left: 0;
  }

  100%{
    width: 200vw;
    height: 100vh;
    left: 0;
  }
`;

const FillScreen = styled.div`
  background-color: var(--prime-color);
  position: fixed;
  top: 0;
  left: -10rem;
  z-index: 100;
  animation: ${fillAnimation} 1.5s forwards ease-in-out;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .plane-icon {
    position: absolute;
    right: -6rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 10rem;
    color: white;
    z-index: 102;
  }

  .plane-icon-shadow {
    position: absolute;
    right: -6rem;
    top: 50%;
    transform: translate(-0.7rem, 0.7rem) translateY(-50%);
    font-size: 10rem;
    color: var(--button-text-color);
    z-index: 101;
  }
`;
