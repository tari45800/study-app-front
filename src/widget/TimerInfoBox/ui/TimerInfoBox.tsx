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
    </TimerInfoBoxContainer>
  );
};

const TimerInfoBoxContainer = styled.div`
  width: 100%;
  max-width: var(--desktop);

  .resultsContentBox {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .resultsTitle {
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;
