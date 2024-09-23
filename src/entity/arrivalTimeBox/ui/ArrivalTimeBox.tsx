import styled from 'styled-components';

interface Props {
  departureComponent: string;
  arrivalComponent: string;
}

export const ArrivalTimeBox = ({
  departureComponent,
  arrivalComponent,
}: Props) => {
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
    margin-bottom: 0.2rem;
    font-size: 0.7rem;
    color: var(--light-text-color);
  }

  .arrivalInfoContent {
    font-size: 1.1rem;
  }
`;
