import styled from 'styled-components';
import { BackGround } from '../../../shared/ui';
import { Timer } from '../../../entity/Timer';
import { StopTimerButton } from '../../TimerConTrols';
import { ArrivalTimeBox } from '../../../entity/arrivalTimeBox';

interface Props {
  delayTime: string;
  offset: string;
}

export const TimerInfoBox = ({ delayTime, offset }: Props) => {
  return (
    <TimerInfoBoxContainer>
      <div className="timerRightAbsoluteBox">
        <BackGround>
          <div className="timerPageTop">
            {/* 타이머 */}
            <div className="timerBox">
              <Timer />
            </div>

            {/* 출발, 도착 시간, 일시정지 버튼 */}
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
    </TimerInfoBoxContainer>
  );
};

const TimerInfoBoxContainer = styled.div`
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

  .arrivalTimeBox {
    width: 10rem;
  }
`;
