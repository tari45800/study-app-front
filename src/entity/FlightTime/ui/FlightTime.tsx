import { useState } from 'react';
import { BackGround, IconLayout } from '../../../shared/ui';
import styled from 'styled-components';
import { flightStore } from '../../../app/appStore';
import { convertTimeString } from '../../../shared/lib/convertTime';

export const FlightTime = () => {
  const { flightTime, changeFlightTime } = flightStore();
  const [timeModal, setTimeModal] = useState(false);

  const flightTimModalcontroller = (e: string) => {
    setTimeModal(!timeModal);
    if (e) {
      changeFlightTime(e);
    }
  };

  const FlightTimes: { [key: string]: string } = {
    '30분': '00:30',
    '1시간': '01:00',
    '1시간 30분': '01:30',
    '2시간': '02:00',
  };

  return (
    <FlightTimeContainer>
      <div onClick={() => flightTimModalcontroller('')}>
        <BackGround>
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
        </BackGround>
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
