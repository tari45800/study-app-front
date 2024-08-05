import React from 'react';
import styled from 'styled-components';
import { formattedDate } from '../../../shared/lib';
import { BoardingInfo } from '../../BoardingInfo';

export const BoardingPass = () => {
  return (
    <BoardingPassContainer>
      <RightCard>
        <div className="bPTop">탑승권</div>
        <div className="bPContentBox">
          <div className="image">img</div>
          {/* <FSDLine color="widget"> */}
          <div className="bPInFo">
            <BoardingInfo />
          </div>
          {/* </FSDLine> */}
        </div>
      </RightCard>
      <LeftCard>
        <div className="bPTop">{formattedDate}</div>
        <div className="bPContentBox">
          <div className="bPtodoWidget">투두 위젯</div>
          <div className="bPbuttonBox">예약하기 피쳐</div>
        </div>
      </LeftCard>
    </BoardingPassContainer>
  );
};

const BoardingPassContainer = styled.div`
  width: 60rem;
  height: 15rem;
  display: flex;

  .bPTop {
    border-bottom: 0.2rem solid black;
    padding: 0.5rem;
  }
`;

const RightCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  border: 0.2rem solid black;
  border-radius: 1rem;

  .bPContentBox {
    display: flex;
    flex: 1;
    padding: 0.5rem;

    .image {
      flex: 1;
      border: 0.2rem solid black;
    }

    .bPInFo {
      width: 15rem;
      border: 0.2rem solid black;
    }
  }
`;

const LeftCard = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;

  border: 0.2rem solid black;
  border-radius: 1rem;

  .bPContentBox {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;

    .bPtodoWidget {
      flex: 1;
      border: 0.2rem solid black;
    }

    .bPbuttonBox {
      border: 0.2rem solid black;
    }
  }
`;
