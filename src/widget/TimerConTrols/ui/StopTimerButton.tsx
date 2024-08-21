import { useTimerStore } from '../../../app/appStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { faCirclePause } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
export const StopTimerButton = () => {
  const { stopTimer, startTimer, isRunning } = useTimerStore();

  const handleToggle = () => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  return (
    <StopTimerButtonContainer>
      <button onClick={handleToggle}>
        {isRunning ? (
          <FontAwesomeIcon
            className="stopTimeIcon pause"
            icon={faCirclePause}
          />
        ) : (
          <FontAwesomeIcon className="stopTimeIcon play" icon={faCirclePlay} />
        )}
      </button>
    </StopTimerButtonContainer>
  );
};

const StopTimerButtonContainer = styled.div`
  .stopTimeIcon {
    font-size: 2rem;
    color: var(--button-text-color);
  }

  .pause {
    color: var(--prime-color);
  }

  .play {
  }
`;
