import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

const cloudAnimation = keyframes`
  0% {
    left: 0%;
    transform:translatex(-100%) translateY(10%);
  }
  
  100%{
    left: 100%;
    transform: translatex(100%) translateY(10%);
  }
`;

const cloudShadowAnimation = keyframes`
  0% {
    left: 0%;
    transform: translate(-0.5rem, 0.5rem) translatex(-100%) translateY(10%);
  }

  100%{
    left: 100%;
    transform: translate(-0.5rem, 0.5rem) translatex(100%) translateY(10%);
  }
`;

const TimerAnimationContainer = styled.div`
  height: 100%;
  position: relative;

  .fly-window {
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #619ff4, var(--prime-color));
    border-radius: 3rem;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 8px;
    background-color: var(--prime-color);
    overflow: hidden;
    cursor: pointer;
  }

  .fly-background {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 103;

    width: calc(100% - 4rem);
    height: calc(100% - 4rem);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 2rem;
    border: 2px solid rgba(255, 255, 255, 0.18);
  }

  .cloud-icon {
    position: absolute;
    transform: translatex(-100%);
    z-index: 102;
    animation: ${cloudAnimation} 20s forwards ease-in-out infinite;
  }

  .cloud-icon-shadow {
    position: absolute;
    transform: translate(-0.7rem, 0.7rem) translatex(-100%);
    color: var(--header-icon-color);
    z-index: 101;
    animation: ${cloudShadowAnimation} 20s forwards ease-in-out infinite;
  }
`;

const generateRandomValue = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const generateRandomGrayColor = () => {
  const grayValue = Math.floor(generateRandomValue(240, 255));
  return `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
};

const cloudsArray = Array.from({ length: 30 }, (_, index) => ({
  top: generateRandomValue(0, 100), // 구름의 Y 위치
  delay: generateRandomValue(0, 20), // 애니메이션 딜레이
  size: generateRandomValue(5, 20), // 구름 아이콘 크기 (rem 단위)
  color: generateRandomGrayColor(), // 구름 아이콘 색상
  key: index,
}));

export const TimerAnimation = () => {
  const animationRef = useRef<HTMLDivElement>(null);

  const handleEnterFullscreen = () => {
    if (animationRef.current) {
      if (animationRef.current.requestFullscreen) {
        animationRef.current.requestFullscreen();
      } else if ((animationRef.current as any).webkitRequestFullscreen) {
        (animationRef.current as any).webkitRequestFullscreen();
      } else if ((animationRef.current as any).msRequestFullscreen) {
        (animationRef.current as any).msRequestFullscreen();
      }
    }
  };

  return (
    <TimerAnimationContainer ref={animationRef}>
      <div className="fly-window" onClick={handleEnterFullscreen}>
        <div className="fly-background"></div>
        {cloudsArray.map((cloud) => (
          <React.Fragment key={cloud.key}>
            <FontAwesomeIcon
              icon={faCloud}
              className="cloud-icon"
              style={{
                top: `${cloud.top}%`,
                animationDelay: `${cloud.delay}s`,
                fontSize: `${cloud.size}rem`,
                color: cloud.color,
              }}
            />
            <FontAwesomeIcon
              icon={faCloud}
              className="cloud-icon-shadow"
              style={{
                top: `${cloud.top}%`,
                animationDelay: `${cloud.delay}s`,
                fontSize: `${cloud.size}rem`,
              }}
            />
          </React.Fragment>
        ))}
      </div>
    </TimerAnimationContainer>
  );
};
