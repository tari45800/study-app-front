import styled from 'styled-components';
import { BackGround } from '../../../shared/ui';
import { Timer } from '../../../entity/Timer';
import {
  ResetTimerButton,
  StopTimerButton,
} from '../../../widget/TimerConTrols';
import { TimerAnimation } from '../../../shared/ui/TimerAnimation/TimerAnimation';
import { TimerEndModal } from '../../../shared/lib/TimerEndModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { CurrentTime } from '../../../shared/lib';
import { DelayTime } from '../../../shared/lib/DelayTime';

DelayTime;

export const TimerPage = () => {
  const storedArrivalInfo =
    localStorage.getItem('arrivalInfo') || '{"time": 0}';
  const arrivalInfo = JSON.parse(storedArrivalInfo);

  return (
    <TimerPageContainer>
      <div className="timePageContent">
        <div className="timerRightAbsoluteBox">
          <BackGround>
            <div className="timerPageTop">
              <div className="timerBox">
                <Timer />
              </div>

              <div className="timerPageTopRight">
                <div className="arrivalTimeBox">
                  <div className="arrivalTimeContent">
                    <div className="arrivalInfoTItle">출발 시간</div>
                    <div className="arrivalInfoContent">
                      <DelayTime />
                    </div>
                  </div>
                  <div className="arrivalTimeContent">
                    <div className="arrivalInfoTItle">도착 시간</div>
                    <div className="arrivalInfoContent">
                      <DelayTime
                        includePausedTimerSeconds={true}
                        offset={arrivalInfo.time}
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <StopTimerButton />
                </div>
              </div>
            </div>
          </BackGround>
        </div>
        <div className="timerPageWindow">{/* <TimerAnimation /> */}</div>
        <div className="timerLeftAbsoluteBox">
          <BackGround>
            <div className="timerPageBottom">
              <div className="todoBox">투두</div>
              {/* <div>그룸가기</div> */}
              <TimerEndModal to="/">
                <FontAwesomeIcon
                  className="resetTimeIcon"
                  icon={faCircleXmark}
                />
              </TimerEndModal>
            </div>
          </BackGround>
        </div>
      </div>
    </TimerPageContainer>
  );
};

const TimerPageContainer = styled.div`
  display: flex;
  justify-content: center;

  // 도착 정보
  .arrivalTimeBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 10rem;
    .arrivalTimeContent {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .arrivalInfoTItle {
      font-size: 0.7rem;
      color: var(--light-text-color);
      margin-bottom: 0.2rem;
    }

    .arrivalInfoContent {
      font-size: 1.1rem;
    }
  }

  .resetTimeIcon {
    font-size: 2rem;
    color: var(--button-text-color);
  }

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
    justify-content: space-between;

    .timerPageTopRight {
      display: flex;
      align-items: center;
      gap: 1rem;
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

  @media (max-height: 45rem) {
    .timerRightAbsoluteBox,
    .timerLeftAbsoluteBox {
      position: fixed;
      bottom: var(--spacing-small);
      z-index: 200;

      width: 100%;
      max-width: var(--desktop);
      padding-right: 1.4rem;
    }

    .timerRightAbsoluteBox {
      display: flex;
    }
    .timerLeftAbsoluteBox {
      display: flex;
      justify-content: end;
    }
  }
`;
