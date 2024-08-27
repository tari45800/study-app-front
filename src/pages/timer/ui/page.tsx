import styled from 'styled-components';
import { BackGround } from '../../../shared/ui';
import { Timer } from '../../../entity/Timer';
import { StopTimerButton } from '../../../widget/TimerConTrols';
import { TimerAnimation } from '../../../shared/ui/TimerAnimation/TimerAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { DelayTime } from '../../../shared/lib/DelayTime';
import { ArrivalTimeBox } from '../../../entity/arrivalTimeBox';
import { TimerPostModal } from '../../../shared/lib/TimerPostModal';
import { useTimerStore, useTimeStore } from '../../../app/appStore';

export const TimerPage = () => {
  const storedArrivalInfo =
    localStorage.getItem('arrivalInfo') || '{"time": 0}';
  const arrivalInfo = JSON.parse(storedArrivalInfo);

  const { seconds, pausedTimerSeconds } = useTimerStore();
  const { departureTime, arrivalTime } = useTimeStore();

  const postDatas = {
    userId: 1,
    flightTime: `${seconds}`,
    departureTime,
    arrivalTime,
    delayTime: `${pausedTimerSeconds}`,
    todos: [
      {
        todoId: 1,
        todoContent: '안녕 안녕',
        todoState: true,
      },
      {
        todoId: 2,
        todoContent: '나는',
        todoState: true,
      },
      {
        todoId: 3,
        todoContent: '지수야',
        todoState: true,
      },
    ],
  };

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
                <ArrivalTimeBox
                  departureComponent={
                    <DelayTime updateTarget="departureTime" />
                  }
                  arrivalComponent={
                    <DelayTime
                      includePausedTimerSeconds={true}
                      offset={arrivalInfo.time}
                      updateTarget="arrivalTime"
                    />
                  }
                />
                <div>
                  <StopTimerButton />
                </div>
              </div>
            </div>
          </BackGround>
        </div>
        <div className="timerPageWindow">{<TimerAnimation />}</div>
        <div className="timerLeftAbsoluteBox">
          <BackGround>
            <div className="timerPageBottom">
              <div className="todoBox">투두</div>
              {/* <div>그룸가기</div> */}
              <TimerPostModal to="/resultPage" postDatas={postDatas}>
                <FontAwesomeIcon
                  className="resetTimeIcon"
                  icon={faCircleXmark}
                />
              </TimerPostModal>
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

  .arrivalTimeBox {
    width: 10rem;
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
    .timerPageTop,
    .timerPageBottom {
      height: 3rem;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .timerRightAbsoluteBox,
    .timerLeftAbsoluteBox {
      position: fixed;
      bottom: var(--spacing-small);
      z-index: 200;
      display: flex;
      align-items: center;
    }

    .timerRightAbsoluteBox {
      right: var(--spacing-small);
    }
    .timerLeftAbsoluteBox {
      left: var(--spacing-small);
    }
  }
`;
