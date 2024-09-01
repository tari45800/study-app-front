import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons'; // 비행기 아이콘을 사용

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

  /* 비행기 아이콘 스타일링 */
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

  .FillScreen-line {
    background-color: white;
    position: absolute;
    right: -1.5rem;
    height: 100vh;
    width: 3rem;
    /* transform: rotate(2.5deg); */
  }
`;

export const StartPageTransition = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAnimationEnd = () => {
      navigate('/timerPage');
    };

    const element = document.querySelector('.FillScreen');
    element?.addEventListener('animationend', handleAnimationEnd);

    // Clean up event listener when component unmounts
    return () => {
      element?.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [navigate]);

  return (
    <FillScreen className="FillScreen">
      <FontAwesomeIcon icon={faPlane} className="plane-icon" />
      <FontAwesomeIcon icon={faPlane} className="plane-icon-shadow" />
    </FillScreen>
  );
};
