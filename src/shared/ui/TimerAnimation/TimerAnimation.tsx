import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

const cloudAnimation = keyframes`
  0% {
    left: 0%;
    transform:translatex(-100%) translateY(10%)
  }
  
  100%{
    left: 100%;
    transform: translatex(100%) translateY(10%);
  }
`;

const cloudShadowAnimation = keyframes`
  0% {
    left: 0%;
    transform:translate(-0.7rem, 0.7rem) translatex(-100%)  translateY(10%)
  }

  100%{
    left: 100%;
    transform: translate(-0.7rem, 0.7rem) translatex(100%) translateY(10%);
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
    font-size: 10rem;
    color: white;
    z-index: 102;
    animation: ${cloudAnimation} 20s forwards ease-in-out infinite;
  }

  .cloud-icon-shadow {
    position: absolute;
    font-size: 10rem;
    transform: translate(-0.7rem, 0.7rem) translatex(-100%);
    color: var(--button-text-color);
    z-index: 101;
    animation: ${cloudShadowAnimation} 20s forwards ease-in-out infinite;
  }
`;

const generateRandomValue = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const cloudsArray = Array.from({ length: 10 }, (_, index) => ({
  top: generateRandomValue(0, 100), // 0%에서 80% 사이의 무작위 위치
  delay: generateRandomValue(0, 15), // 0초에서 15초 사이의 무작위 딜레이
  key: index,
}));

export const TimerAnimation = () => {
  return (
    <TimerAnimationContainer>
      <div className="fly-window">
        <div className="fly-background"></div>
        {cloudsArray.map((cloud) => (
          <React.Fragment key={cloud.key}>
            <FontAwesomeIcon
              icon={faCloud}
              className="cloud-icon"
              style={{
                top: `${cloud.top}%`,
                animationDelay: `${cloud.delay}s`,
              }}
            />
            <FontAwesomeIcon
              icon={faCloud}
              className="cloud-icon-shadow"
              style={{
                top: `${cloud.top}%`,
                animationDelay: `${cloud.delay}s`,
              }}
            />
          </React.Fragment>
        ))}
      </div>
    </TimerAnimationContainer>
  );
};
