import React from 'react';
import styled from 'styled-components';
import { DepatureArrival } from '../../../entity/DepatureArrival';
import { CurrentTime } from '../../../shared/lib';
import { getData } from '../../../shared/lib/server/api/apis';
import { useQuery } from '@tanstack/react-query';

export const BoardingInfo = () => {
  const {
    isPending,
    error,
    data: arrival,
  } = useQuery({
    queryKey: ['arrivalInfo'],
    queryFn: () => getData('/arrival'),
  });

  if (isPending) {
    return <div>loding...</div>;
  }

  if (error) {
    console.log(error);
    return <div>error</div>;
  }

  const arrivalInfo = arrival && arrival[0];

  console.log(arrivalInfo);
  return (
    <BoardingInfoContainer>
      <div className="arrivalNameBox">
        <DepatureArrival arrivalInfo={arrivalInfo} />
      </div>
      <div className="arrivalTimeBox">
        <div>
          <div>출발 시간</div>
          <CurrentTime />
        </div>
        <div>
          <div>도착 시간</div>
          <CurrentTime offset={arrivalInfo.time} />
        </div>
      </div>
      <div className="arrivalCountBox">
        <div>인원</div>
      </div>
    </BoardingInfoContainer>
  );
};

const BoardingInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0.5rem;

  > div {
    flex: 1;
  }
  .arrivalNameBox {
    border: 0.1rem solid black;
  }
  .arrivalTimeBox,
  .arrivalCountBox {
    border: 0.1rem solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
