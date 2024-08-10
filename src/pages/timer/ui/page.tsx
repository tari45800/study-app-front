import styled from 'styled-components';
import { BackGround } from '../../../shared/ui';
import { Timer } from '../../../entity/Timer';
import {
  ResetTimerButton,
  StopTimerButton,
} from '../../../widget/TimerConTrols';
import { TimerAnimation } from '../../../shared/ui/TimerAnimation/TimerAnimation';

export const TimerPage = () => {
  return (
    <TimerPageContainer>
      <div className="timePageContent">
        <BackGround>
          <div className="timerPageTop">
            <div className="timerBox">
              <Timer />
            </div>
            <div>
              <StopTimerButton />
            </div>
          </div>
        </BackGround>
        <div className="timerPageWindow">
          <TimerAnimation />
        </div>
        <BackGround>
          <div className="timerPageBottom">
            <div className="todoBox">투두</div>
            <div>
              그룹,
              <div>
                <ResetTimerButton />
              </div>
            </div>
          </div>
        </BackGround>
      </div>
    </TimerPageContainer>
  );
};

const TimerPageContainer = styled.div`
  display: flex;
  justify-content: center;

  .timePageContent {
    flex: 1;
    max-width: var(--desktop);
    padding: var(--spacing-small);

    display: flex;
    flex-direction: column;
    gap: var(--spacing-small);
  }

  .timerPageTop {
    display: flex;
    align-items: center;

    .timerBox {
      flex: 1;
    }
  }

  .timerPageWindow {
    height: 30rem;
  }

  .timerPageBottom {
    display: flex;

    .todoBox {
      flex: 1;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`;
