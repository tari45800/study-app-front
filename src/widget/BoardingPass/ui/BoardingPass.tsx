import styled from 'styled-components';
import { formattedDate } from '../../../shared/lib';
import { BoardingInfo } from '../../BoardingInfo';
import { Button } from '../../../shared/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { StartPageTransition } from '../../../shared/ui/PageTransition/StartPageTransition';
import { TodoBox } from '../../TodoBox/ui/TodoBox';
import { Card } from '../../../shared/ui/Card/Card';

export const BoardingPass = () => {
  const arrivalInfo = localStorage.getItem('arrivalInfo');
  const [transition, setTransition] = useState(false);
  const userId = 'tari45800님';

  const makeReservation = () => {
    if (arrivalInfo) {
      setTransition(true);
    } else {
      alert('여행지를 선택해주세요!');
    }
  };

  return (
    <BoardingPassContainer>
      {transition && <StartPageTransition />}

      <Card cardTitle={`${userId} 탑승권`}>
        <div className="leftCard cardContentBox">
          <div className="cardImage">
            <FontAwesomeIcon className="faPlaneDeparture" icon={faPlane} />
          </div>
          <div className="boardingInfoBox">
            <BoardingInfo />
          </div>
        </div>
      </Card>

      <Card cardTitle={`${formattedDate}`}>
        <div className="rightCard cardContentBox">
          <div className="cardTodoBox">
            <TodoBox></TodoBox>
          </div>
          <div className="cardButtonBox" onClick={makeReservation}>
            <Button theme={arrivalInfo ? 'primary' : 'icon'}>예약하기</Button>
          </div>
        </div>
      </Card>
    </BoardingPassContainer>
  );
};

const BoardingPassContainer = styled.div`
  width: 100%;
  max-width: var(--desktop);
  height: 15rem;

  display: flex;
  gap: 0.1rem;

  .cardContentBox {
    height: 100%;
    padding: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .leftCard {
    width: 100%;
    justify-content: space-between;

    .faPlaneDeparture {
      font-size: 6rem;
      color: var(--light-text-color);
    }
    .boardingInfoBox {
      width: 17rem;
      height: 100%;
    }
  }

  .rightCard {
    width: 20rem;
    flex-direction: column;
  }

  /* .faPlane {
    margin-right: 0.5rem;
  }



  .bPContentBox {
    display: flex;
    flex: 1;
    padding: 1rem;

    .image {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .bPInFo {
      width: 17rem;
    }
  } */
`;
