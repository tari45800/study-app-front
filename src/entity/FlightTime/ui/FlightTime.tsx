import { useState } from 'react';
import styled from 'styled-components';
import { flightStore } from '../../../app/appStore';
import { convertTimeString } from '../../../shared/lib/convertTime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { IconLayout } from '../../../shared/ui';

export const FlightTime = () => {
  const { flightTime, changeFlightTime } = flightStore();
  const [timeModal, setTimeModal] = useState(false);

  // 비행시간 선택 모달 컨트롤러
  const flightTimModalHandler = (e: string) => {
    setTimeModal(!timeModal);
    if (e) {
      changeFlightTime(e);
    }
  };

  // 비행시간 리스트
  const FlightTimes: { [key: string]: string } = {
    '30분': '00:30',
    '1시간': '01:00',
    '1시간 30분': '01:30',
  };

  // 비행시간 모달 ui
  const modalUi = timeModal && (
    <div className="flightTimeModal scroll">
      {Object.keys(FlightTimes).map((el, idx) => {
        return (
          <div
            className="flightTime"
            onClick={() => flightTimModalHandler(FlightTimes[el])}
            key={idx}
          >
            {`${el}`}
          </div>
        );
      })}
    </div>
  );

  return (
    <FlightTimeContainer>
      <div
        className="flightTimeContent"
        onClick={() => flightTimModalHandler('')}
      >
        {/* 비행시간 ui */}
        <IconLayout
          left={<div className="iconOverflowBox icon">✈️</div>}
          bottom="비행시간"
          right={
            <>
              <div className="faAngleRight">
                {convertTimeString(flightTime)}
              </div>
              <FontAwesomeIcon className="faAngleRight" icon={faAngleRight} />
            </>
          }
        />

        {/* 모달 ui */}
        {modalUi}
      </div>
    </FlightTimeContainer>
  );
};

const FlightTimeContainer = styled.div`
  position: relative;

  .flightTimeContent {
    cursor: pointer;
  }

  .iconLayoutBottom {
    font-size: 1.2rem;
  }

  .flightTimeModal {
    position: absolute;
    top: 0;
    left: calc(100% + 0.7rem);
    width: 10rem;
    overflow: auto;
    background-color: var(--background-ui-color);
    border: 1px solid var(--flightTime-color);
    border-radius: 0.7rem;
  }

  .flightTime {
    padding: 1rem;
    border-bottom: 1px solid var(--flightTime-color);
    cursor: pointer;
  }

  .flightTime:hover {
    background-color: var(--flightTime-color);
  }

  .iconLayoutRight {
    display: flex;
    gap: 0.5rem;
  }

  .icon {
    font-size: 1.5rem;
  }
`;
