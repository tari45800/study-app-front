import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons'; // 비행기 아이콘을 사용

const fillAnimation = keyframes`
  0% {
    width: 0;
    height: 100vh;
    left: 0;

  }

  30%{
    width: 50vw;
    height: 100vh;
    left: 0;

  }

  80%{
    width: 200vw;
    height: 100vh;
    left: 0;

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
  animation: ${fillAnimation} 2s forwards ease-in-out;
  display: flex;
  justify-content: flex-end; /* 오른쪽 끝에 아이콘을 위치시키기 위해 사용 */
  align-items: center; /* 중앙에 수직 정렬 */

  /* 비행기 아이콘 스타일링 */
  .plane-icon {
    position: absolute;
    right: -6rem;
    top: 50%;
    transform: translateY(-50%); /* 중앙에 위치시키기 위해 사용 */
    font-size: 10rem;
    color: white;
    z-index: 102;
  }

  .plane-icon-shadow {
    position: absolute;
    right: -6rem;
    top: 50%;
    transform: translate(-0.7rem, 0.7rem) translateY(-50%); /* 살짝 좌하단으로 이동시키기 위해 사용 */
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
    transform: rotate(2.5deg);
  }
`;

export const PageTransition = () => {
  return (
    <FillScreen>
      {/* <div className="FillScreen-line"></div> */}
      <FontAwesomeIcon icon={faPlane} className="plane-icon" />
      <FontAwesomeIcon icon={faPlane} className="plane-icon-shadow" />
    </FillScreen>
  );
};

// const PageTransitionContainer = styled.div``;
