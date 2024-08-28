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
const calculateArrivalTime = (
  departureTime: string, // "18:05" 형태의 시각
  flightTime: string, // "5399" 초 단위 시간
  delayTime: string, // "69" 초 단위 지연 시간
): string => {
  // localStorage에서 arrivalInfo를 불러옴
  const arrivalInfoString = localStorage.getItem('arrivalInfo');
  if (!arrivalInfoString)
    throw new Error('arrivalInfo가 localStorage에 없습니다.');

  // arrivalInfo를 JSON으로 파싱
  const arrivalInfo = JSON.parse(arrivalInfoString);

  // arrivalInfo.time을 Date 객체로 변환 (기준 시간)
  const [arrivalHours, arrivalMinutes] = arrivalInfo.time
    .split(':')
    .map(Number);
  let baseTime = new Date();
  baseTime.setHours(arrivalHours, arrivalMinutes, 0, 0);

  // flightTime을 초 단위로 가져와 분 및 초로 변환하여 기준 시간에서 뺌
  baseTime.setSeconds(baseTime.getSeconds() - parseInt(flightTime));

  // departureTime을 Date 객체로 변환
  const [depHours, depMinutes] = departureTime.split(':').map(Number);
  let departureDate = new Date();
  departureDate.setHours(depHours, depMinutes, 0, 0);

  // baseTime (arrivalInfo.time - flightTime) 결과를 departureTime에 더함
  departureDate.setHours(departureDate.getHours() + baseTime.getHours());
  departureDate.setMinutes(departureDate.getMinutes() + baseTime.getMinutes());
  departureDate.setSeconds(departureDate.getSeconds() + baseTime.getSeconds());

  // delayTime을 초 단위로 더함
  departureDate.setSeconds(departureDate.getSeconds() + parseInt(delayTime));

  // 최종 시간을 HH:MM 형식으로 반환
  const resultHours = departureDate.getHours().toString().padStart(2, '0');
  const resultMinutes = departureDate.getMinutes().toString().padStart(2, '0');

  return `${resultHours}:${resultMinutes}`;
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
              arrivalComponent={calculateArrivalTime(
                timerResult?.departureTime,
                timerResult?.flightTime,
                timerResult?.delayTime,
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
