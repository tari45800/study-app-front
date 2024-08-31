import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { getData } from '../../../shared/lib/server/api/apis';
import { Record } from '../../../entity/Records';
import { BackGround } from '../../../shared/ui';

export const FlightRecordPage = () => {
  const location = useLocation();
  const { idx } = location.state || {}; // idx 값을 받음

  const {
    isPending,
    error,
    data: flightRecord,
  } = useQuery({
    queryKey: ['flightRecord'],
    queryFn: () => getData(`/flightRecord?idx=${idx}`),
    staleTime: 0,
  });

  if (isPending) {
    return <div>loding...</div>;
  }

  if (error) {
    console.log(error);
    return <div>error</div>;
  }

  console.log(flightRecord);

  return (
    <FlightRecordPageContainer>
      <div className="FlightRecordPageContent">
        <BackGround>
          <div className="flightRecordTitleBox">
            <div className="flightRecordTitle">비행 기록</div>
            <div>{`${flightRecord?.arrivalInfo.city}/${flightRecord?.arrivalInfo.airport}`}</div>
          </div>
        </BackGround>
        <Record timerResult={flightRecord}></Record>
      </div>
    </FlightRecordPageContainer>
  );
};

const FlightRecordPageContainer = styled.div`
  padding: var(--spacing-small);
  display: flex;
  flex-direction: column;
  align-items: center;

  .FlightRecordPageContent {
    width: 100%;
    max-width: var(--desktop);
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .flightRecordTitleBox {
      display: flex;
      justify-content: space-between;
      font-size: 1rem;
      font-weight: normal;
      color: var(--light-text-color);
    }
    .flightRecordTitle {
    }
  }
`;
