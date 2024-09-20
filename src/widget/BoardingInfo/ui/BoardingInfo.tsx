import styled from 'styled-components';
import { DepatureArrival } from '../../../entity/DepatureArrival';
import { CurrentTime } from '../../../shared/lib';
import { ArrivalTimeBox } from '../../../entity/arrivalTimeBox';
import { QRCodeSVG } from 'qrcode.react';
import { getStoragedData } from '../../../shared/lib/getStorageData';
import { arrivalInfoType } from '../../../shared/model/type';

export const BoardingInfo = () => {
  const arrivalInfo = getStoragedData<arrivalInfoType>('arrivalInfo');

  return (
    <BoardingInfoContainer>
      {/* 여행지 선택 칸 */}
      <DepatureArrival arrivalInfo={arrivalInfo} displayUi={true} />

      {/* 출발,도착 시간 */}
      <ArrivalTimeBox
        // 출발 시간
        departureComponent={<CurrentTime />}
        // 도착 시간
        arrivalComponent={
          arrivalInfo ? <CurrentTime offset={arrivalInfo.time} /> : '시간 미정'
        }
      />

      {/* 인원 초대, 큐알코드 */}
      <div className="arrivalinvitationBox">
        <div className="arrivalTimeContent">
          <div className="arrivalInfoTItle">인원</div>
          <div className="arrivalInfoContent">1</div>
        </div>
        {/* 공백 */}
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .arrivalTimeBox,
  .arrivalinvitationBox {
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
    margin-bottom: 0.2rem;
    color: var(--light-text-color);
    font-size: 0.7rem;
  }

  .arrivalInfoContent {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
  }

  .QRCode {
    width: 2.8rem;
    height: 2.8rem;
    padding: 0.1rem;
    background-color: white;
  }
`;
