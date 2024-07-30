import styled from 'styled-components';

interface Props {
  arrival: string;
  country: string;
  city: string;
  time: string;
}

export const DepatureArrival = ({ arrival }) => {
  return (
    <DepatureArrivalContainer>
      <div className="depatureBox">
        <div className="depatureCite">출발지</div>
        <div>대한민국 / 부산</div>
      </div>

      <div className="arrowBox">→</div>

      <div className="arrivalBox">
        <div className="arrivalCite">{arrival.arrival}</div>
        <div>{`${arrival.country} / ${arrival.city}`}</div>
      </div>
    </DepatureArrivalContainer>
  );
};

const DepatureArrivalContainer = styled.div`
  display: flex;
  height: 100%;
  font-size: 0.7rem;

  .depatureBox,
  .arrivalBox,
  .arrowBox {
    /* border: 0.1rem solid black; */
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div {
      flex: 0 0 0;
    }
  }

  .depatureCite,
  .arrivalCite {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .depatureInfo,
  .arrivalInfo {
    font-size: 0.6rem;
    display: flex;
  }
`;
