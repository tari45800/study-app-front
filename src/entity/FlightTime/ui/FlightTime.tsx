import { useState } from 'react';
import { IconLayout } from '../../../shared/ui';
import styled from 'styled-components';
import { flight } from '../../../app/appStore';
import { convertTimeString } from '../../../shared/lib/convertTime';

export const FlightTime = () => {
  const flightTime = flight((state) => state.flightTime);
  const changeFlightTime = flight((state) => state.changeFlightTime);
  const [timeModal, setTimeModal] = useState(false);

  const flightTimModalcontroller = (e: string) => {
    setTimeModal(!timeModal);
    if (e) {
      changeFlightTime(e);
    }
  };

  const FlightTimes: { [key: string]: string } = {
    '30분': '00h30m',
    '1시간': '01h00m',
    '1시간 30분': '01h30m',
    '2시간': '02h00m',
  };

  return (
    <FlightTimeContainer>
      <div onClick={() => flightTimModalcontroller('')}>
        <IconLayout>
          <div className="IconLayoutRight">🙂</div>
          <div className="IconLayoutMiddleBox">
            <div className="IconLayoutTop">비행시간</div>
            <div className="IconLayoutBottom">
              {convertTimeString(flightTime)}
            </div>
          </div>
          <div className="IconLayoutLeft">〉</div>
        </IconLayout>
        {timeModal && (
          <div className="flightTimeModal">
            {Object.keys(FlightTimes).map((el, idx) => {
              return (
                <div
                  className="flightTime"
                  onClick={() => flightTimModalcontroller(FlightTimes[el])}
                  key={idx}
                >
                  {`${el}`}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </FlightTimeContainer>
  );
};

const FlightTimeContainer = styled.div`
  position: relative;

  .flightTimeModal {
    position: absolute;
    top: 0;
    left: 100%;
    height: 10rem;
    width: 10rem;
    overflow: auto;
    border: 0.2rem solid red;
    background-color: white;
  }

  .flightTime {
    padding: 1rem;
    border-bottom: 0.2rem solid white;
    background-color: lightgray;
    cursor: pointer;
  }
`;
