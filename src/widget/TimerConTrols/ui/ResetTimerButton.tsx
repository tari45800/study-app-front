import { useNavigate } from 'react-router-dom';
import { useTimerStore } from '../../../app/appStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

export const ResetTimerButton = () => {
  const { resetTimer } = useTimerStore();
  const navigate = useNavigate();

  const handleReset = () => {
    resetTimer();
    navigate('/'); // 리셋 후 메인 페이지로 이동
  };

  return (
    <ResetTimerButtonContainer>
      <div onClick={handleReset}>
        <FontAwesomeIcon className="resetTimeIcon" icon={faCircleXmark} />
      </div>
    </ResetTimerButtonContainer>
  );
};

const ResetTimerButtonContainer = styled.div`
  .resetTimeIcon {
    font-size: 2rem;
    color: var(--button-text-color);
  }
`;
