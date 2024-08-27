import styled from 'styled-components';
import { ArrivalTimeBox } from '../../../entity/arrivalTimeBox';
import { BackGround, Button } from '../../../shared/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../../../shared/lib/server/api/apis';

const formatTime = (seconds: number, arrival?: boolean): string => {
  if (arrival) {
    const arrivalInfo = localStorage.getItem('arrivalInfo');
    if (arrivalInfo) {
      const timeData = JSON.parse(arrivalInfo);
      const [hoursStr, minutesStr] = timeData.time.split(':');
      const storedHours = parseInt(hoursStr, 10);
      const storedMinutes = parseInt(minutesStr, 10);

      const storedTotalSeconds = storedHours * 3600 + storedMinutes * 60;
      seconds = storedTotalSeconds - seconds;
    }
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  if (hours > 0) {
    return `${hours}시간 ${minutes}분 ${remainingSeconds}초`;
  } else if (minutes > 0) {
    return `${minutes}분 ${remainingSeconds}초`;
  } else {
    return `${remainingSeconds}초`;
  }
};
const calculateTimeDifference = (arrivalTime: string): string => {
  // 로컬 스토리지에서 'arrivalInfo'를 가져옵니다.
  const arrivalInfo = localStorage.getItem('arrivalInfo');

  if (!arrivalInfo) {
    throw new Error('로컬 스토리지에 저장된 데이터가 없습니다.');
  }

  // 로컬 스토리지에서 저장된 시간을 가져옵니다.
  const { time: storedTime } = JSON.parse(arrivalInfo);

  // 시간을 초 단위로 변환하는 헬퍼 함수
  const timeToSeconds = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 3600 + minutes * 60;
  };

  // 초를 시간 형식으로 변환하는 헬퍼 함수
  const secondsToTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  };

  // 입력된 시간들을 초 단위로 변환
  const arrivalTimeInSeconds = timeToSeconds(arrivalTime);
  const storedTimeInSeconds = timeToSeconds(storedTime);

  // 계산: arrivalTime - storedTime
  const resultInSeconds = arrivalTimeInSeconds - storedTimeInSeconds;

  // 결과를 시간 형식으로 변환하여 반환
  return secondsToTime(resultInSeconds);
};
export const ResultPage = () => {
  const navigate = useNavigate();
  const {
    isPending,
    error,
    data: timerResult,
  } = useQuery({
    queryKey: ['timerResult'],
    queryFn: () => getData('/timerResult'),
    staleTime: 0,
  });

  if (isPending) {
    return <div>loding...</div>;
  }

  if (error) {
    console.log(error);
    return <div>error</div>;
  }

  console.log(timerResult);

  return (
    <ResultPageContainer>
      <div className="resultPageContent">
        <div>
          <FontAwesomeIcon className="resultPageIcon" icon={faCircleCheck} />
        </div>
        <div className="resultPageTop">
          <div className="resultPageTime">
            {formatTime(timerResult?.flightTime, true)}
          </div>
          <div className="resultPageClear ">비행완료</div>
        </div>

        <BackGround>
          <div className="resultPageTimeBox">
            <div className="resultPageDelay">
              {formatTime(timerResult?.delayTime)}
            </div>
            <ArrivalTimeBox
              departureComponent={timerResult?.departureTime}
              arrivalComponent={calculateTimeDifference(
                timerResult?.arrivalTime,
              )}
            />
          </div>
        </BackGround>

        <div className="resultPageButtonBox">
          <Button onClick={() => navigate('/')}>홈으로</Button>
          <Button theme="icon">여행하기</Button>
        </div>
      </div>
    </ResultPageContainer>
  );
};

const ResultPageContainer = styled.div`
  display: flex;
  justify-content: center;

  .resultPageContent {
    flex: 1;
    max-width: var(--desktop);
    padding: var(--spacing-small);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    font-size: 1.5rem;

    .resultPageIcon {
      font-size: 8rem;
      color: var(--prime-color);
    }

    .resultPageTop,
    .resultPageTimeBox,
    .resultPageButtonBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--spacing-large);
      width: 15rem;
    }

    .resultPageTop {
      margin-bottom: 2rem;

      .resultPageTime {
        font-size: 2.5rem;
        font-weight: bold;
      }
      .resultPageClear {
        color: var(--light-text-color);
      }
    }
    .resultPageTimeBox {
      .arrivalTimeBox {
        width: 15rem;
      }
      .arrivalInfoTitle {
        font-size: 1rem;
        font-weight: 600;
      }
      .arrivalInfoContent {
        font-size: 1.5rem;
        font-weight: 600;
      }
      .resultPageDelay {
        font-size: 1rem;
        color: var(--light-text-color);
      }
    }
    .resultPageButtonBox {
      margin-top: 2rem;
      flex-direction: row;
    }
  }
`;
