import React from 'react';
import styled from 'styled-components';

interface ArrivalTimeBoxProps {
  departureComponent: React.ReactNode; // 출발 시간에 해당하는 컴포넌트
  arrivalComponent: React.ReactNode; // 도착 시간에 해당하는 컴포넌트
}

export const ArrivalTimeBox: React.FC<ArrivalTimeBoxProps> = ({
  departureComponent,
  arrivalComponent,
}) => {
  return (
    <ArrivalTimeBoxContainer className="arrivalTimeBox">
      <div className="arrivalTimeContent">
        <div className="arrivalInfoTitle">출발 시간</div>
        <div className="arrivalInfoContent">{departureComponent}</div>
      </div>

      <div className="arrivalTimeContent"></div>
      <div className="arrivalTimeContent">
        <div className="arrivalInfoTitle">도착 시간</div>
        <div className="arrivalInfoContent">{arrivalComponent}</div>
      </div>
    </ArrivalTimeBoxContainer>
  );
};

const ArrivalTimeBoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .arrivalTimeContent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .arrivalInfoTitle {
    font-size: 0.7rem;
    color: var(--light-text-color);
    margin-bottom: 0.2rem;
  }

  .arrivalInfoContent {
    font-size: 1.1rem;
  }
`;
