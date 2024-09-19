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
import Observer from '../../../shared/ui/Observer/Observer';
import { EndPageTransition } from '../../../shared/ui/PageTransition/EndPageTransition';
import { TodoBox } from '../../../widget/TodoBox/ui/TodoBox';

export const TimerPage = () => {
  const storedArrivalInfo =
    localStorage.getItem('arrivalInfo') || '{"time": 0}';
  const arrivalInfo = JSON.parse(storedArrivalInfo);

  const { seconds, pausedTimerSeconds } = useTimerStore();
  const { departureTime, arrivalTime } = useTimeStore();

  // 로컬 스토리지에서 todos를 가져옴
  const storedTodos = localStorage.getItem('todos') || '[]';
  const todos = JSON.parse(storedTodos); // [{ todoId, todoContent, todoState }]

  const postDatas = {
    userId: 1,
    arrivalInfo,
    flightTime: `${seconds}`,
    departureTime,
    arrivalTime,
    delayTime: `${pausedTimerSeconds}`,
    todos, // 로컬 스토리지에서 가져온 todos 추가
  };

  return (
    <TimerPageContainer>
      <EndPageTransition />
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

        <Observer id="TimerAnimation">
          <div className="timerPageWindow">{<TimerAnimation />}</div>
        </Observer>

        <div className="timerLeftAbsoluteBox">
          <Observer id="timerPageBottomBackGround" delay={0.5}>
            <BackGround>
              <div className="timerPageBottom">
                <div className="todoBox">
                  <div></div>
                  <TodoBox />
                </div>
                <TimerPostModal to="/resultPage" postDatas={postDatas}>
                  <FontAwesomeIcon
                    className="resetTimeIcon"
                    icon={faCircleXmark}
                  />
                </TimerPostModal>
              </div>
            </BackGround>
          </Observer>
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
