import React from 'react';
import styled from 'styled-components';
import { DepatureArrival } from '../../../entity/DepatureArrival';

export const BoardingInfo = () => {
  return (
    <BoardingInfoContainer>
      <div>
        <DepatureArrival></DepatureArrival>
      </div>
      <div>시간</div>
      <div>인원</div>
    </BoardingInfoContainer>
  );
};

const BoardingInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0.5rem;

  div {
    flex: 1;
    border: 0.2rem solid black;
  }
`;
