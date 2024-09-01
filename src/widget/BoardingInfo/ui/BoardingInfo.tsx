import styled from 'styled-components';
import { DepatureArrival } from '../../../entity/DepatureArrival';
import { CurrentTime } from '../../../shared/lib';
import { ArrivalTimeBox } from '../../../entity/arrivalTimeBox';
import { QRCodeSVG } from 'qrcode.react';

export const BoardingInfo = () => {
  const storedArrivalInfo = localStorage.getItem('arrivalInfo');

  // 로컬 스토리지에 값이 있으면 그것을 사용하고, 그렇지 않으면 arrival[0] 사용
  const arrivalInfo = storedArrivalInfo ? JSON.parse(storedArrivalInfo) : null;

  return (
    <BoardingInfoContainer>
      <div className="arrivalNameBox">
        <DepatureArrival arrivalInfo={arrivalInfo} displayUi={true} />
      </div>
      <ArrivalTimeBox
        departureComponent={<CurrentTime />}
        arrivalComponent={
          arrivalInfo ? (
            <CurrentTime offset={arrivalInfo.time} />
          ) : (
            <CurrentTime />
          )
        }
      />
      <div className="arrivalCountBox">
        <div className="arrivalTimeContent">
          <div className="arrivalInfoTItle">인원</div>
          <div className="arrivalInfoContent">1</div>
        </div>
        <div className="arrivalTimeContent"></div>
        <div className="arrivalTimeContent">
          <div className="arrivalInfoContent">
            <QRCodeSVG
              className="QRCode"
              value="친구 초대기능을 준비 중 입니다:)"
            />
          </div>
        </div>
      </div>
    </BoardingInfoContainer>
  );
};

const BoardingInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  .arrivalTimeBox,
  .arrivalCountBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .QRCode {
    background-color: white;
    padding: 0.1rem;
    width: 2.8rem;
    height: 2.8rem;
  }
`;
