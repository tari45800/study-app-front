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
    queryKey: ['arrival'],
    queryFn: () => getData('/arrival'),
  });

  if (isPending) {
    return <div>loding...</div>;
  }

  if (error) {
    console.log(error);
    return <div>error</div>;
  }

  const objArrival = arrival && arrival[0];

  return (
    <BoardingInfoContainer>
      <div className="arrivalNameBox">
        <DepatureArrival arrival={objArrival} />
      </div>
      <div className="arrivalTimeBox">
        <CurrentTime />
        <CurrentTime offset={objArrival.time} />
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
