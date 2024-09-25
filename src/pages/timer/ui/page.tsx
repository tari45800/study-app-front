import styled from 'styled-components';
import { BackGround } from '../../../shared/ui';
import { Timer } from '../../../entity/Timer';
import { StopTimerButton } from '../../../widget/TimerConTrols';
import { TimerAnimation } from '../../../shared/ui/TimerAnimation/TimerAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useDelayTime } from '../../../shared/lib/useDelayTime';
import { ArrivalTimeBox } from '../../../entity/arrivalTimeBox';
import { TimerPostModal } from '../../../shared/lib/TimerPostModal';
import { useTimerStore, useTimeStore } from '../../../app/appStore';
import { Observer } from '../../../shared/ui/Observer/Observer';
import { EndPageTransition } from '../../../shared/ui/PageTransition/EndPageTransition';
import { TodoBox } from '../../../widget/TodoBox/ui/TodoBox';
import { getStoragedData } from '../../../shared/lib/getStorageData';
import { TodoType } from '../../../shared/model/type';
import { arrivalInfoType } from '../../../shared/model/type';

export const TimerPage = () => {
  const { seconds, pausedTimerSeconds } = useTimerStore();
  const { departureTime, arrivalTime } = useTimeStore();

  // 로컬 스토리지에서 최근 목적지 정보를 가져옴
  const storedArrivalInfo = getStoragedData<arrivalInfoType>('arrivalInfo');
  const arrivalInfo = storedArrivalInfo;

  // 로컬 스토리지에서 투두를 가져옴
  const storedTodos = getStoragedData<TodoType[]>('todos');
  const todos = storedTodos || [];

  // 포스트 데이터
  const postDatas = {
    userId: 1,
    arrivalInfo,
    flightTime: `${seconds}`,
    departureTime,
    arrivalTime,
    delayTime: `${pausedTimerSeconds}`,
    todos,
  };

  const delayTime = useDelayTime('departureTime', false, '00:00');
  const offset = useDelayTime(
    'arrivalTime',
    true,
    `${arrivalInfo ? arrivalInfo.time : '00:00'}`,
  );

  return (
    <TimerPageContainer>
      {/* 비행기 화면 트렌지션 */}
      <EndPageTransition />

      <div className="timePageContent">
        <div className="timerRightAbsoluteBox">
          {/* 타이머, 출발시간, 도착시간 박스 */}
          <BackGround>
            <div className="timerPageTop">
              <div className="timerBox">
                <Timer />
              </div>
              <div className="timerPageTopRight">
                <ArrivalTimeBox
                  departureComponent={delayTime}
                  arrivalComponent={offset}
                />
                <div>
                  <StopTimerButton />
                </div>
              </div>
            </div>
          </BackGround>
        </div>

        {/* 구름 애니메이션 박스 */}
        <Observer id="TimerAnimation">
          <div className="timerPageWindow">{<TimerAnimation />}</div>
        </Observer>

        <div className="timerLeftAbsoluteBox">
          <Observer id="timerPageBottomBackGround" delay={0.5}>
            <BackGround>
              <div className="timerPageBottom">
                {/* 투두 박스 */}
                <div className="todoBox">
                  <div></div>
                  <TodoBox />
                </div>

                {/* 타이머 종료버튼 */}
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
