import styled from 'styled-components';
import { TimerAnimation } from '../../../shared/ui/TimerAnimation/TimerAnimation';
import { useDelayTime } from '../../../shared/lib/useDelayTime';
import { useTimerStore, useTimeStore } from '../../../app/appStore';
import { Observer } from '../../../shared/ui/Observer/Observer';
import { EndPageTransition } from '../../../shared/ui/PageTransition/EndPageTransition';
import { getStoragedData } from '../../../shared/lib/getStorageData';
import { TodoType } from '../../../shared/model/type';
import { arrivalInfoType } from '../../../shared/model/type';
import { TimerInfoBox } from '../../../widget/TimerInfoBox';
import { TimerTodoBox } from '../../../widget/TimerTodoBox';

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
        {/* 타이머, 출발시간, 도착시간 박스 */}
        <TimerInfoBox delayTime={delayTime} offset={offset} />

        {/* 구름 애니메이션 박스 */}
        <Observer id="TimerAnimation">
          <div className="timerPageWindow">{<TimerAnimation />}</div>
        </Observer>

        {/* 투두 박스  */}
        <TimerTodoBox postDatas={postDatas} />
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

  .timerPageWindow {
    height: 30rem;
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
