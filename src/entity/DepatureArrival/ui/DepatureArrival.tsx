import styled from 'styled-components';

export const DepatureArrival = () => {
  return (
    <DepatureArrivalContainer>
      <div className="depatureCite">출발지</div>
      <div>화살표</div>
      <div className="arrivalCite">도착지</div>
    </DepatureArrivalContainer>
  );
};

const DepatureArrivalContainer = styled.div`
  display: flex;
  height: 100%;
  font-size: 0.7rem;

  .depatureCite,
  .arrivalCite {
  }
`;
