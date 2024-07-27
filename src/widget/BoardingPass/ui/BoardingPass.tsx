import React from 'react';
import styled from 'styled-components';

export const BoardingPass = () => {
  return (
    <BoardingPassContainer>
      <RightCard>
        <div className="boardingPassTop">탑승권</div>
        <div className="contentBox">
          <image>img</image>
          <div className="boardingPassInFo">탑승정보 위젯</div>
        </div>
      </RightCard>
      <LeftCard>
        <div className="boardingPassTop">2024.07.27</div>
        <div className="contentBox">
          <div className="todoWedget">투두 위젯</div>
          <div className="buttonBox">예약하기 피쳐</div>
        </div>
      </LeftCard>
    </BoardingPassContainer>
  );
};

const BoardingPassContainer = styled.div`
  width: 60rem;
  height: 15rem;
  display: flex;

  .boardingPassTop {
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

  > .contentBox {
    flex: 1;
    display: flex;
    padding: 0.5rem;

    image {
      flex: 1;
      border: 0.2rem solid black;
    }

    .boardingPassInFo {
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

  > .contentBox {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;

    .todoWedget {
      flex: 1;
      border: 0.2rem solid black;
    }

    .buttonBox {
      border: 0.2rem solid black;
    }
  }
`;
