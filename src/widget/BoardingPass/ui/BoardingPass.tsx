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

  // 예약하기 기능
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

      {/* 탑승권 정보 */}
      <Card cardTitle={`${userId} 탑승권`}>
        <div className="leftCard cardContentBox">
          <div className="cardImageBox">
            <FontAwesomeIcon className="faPlaneDeparture" icon={faPlane} />
          </div>
          <div className="boardingInfoBox">
            <BoardingInfo />
          </div>
        </div>
      </Card>

      {/* 탑승권 todo */}
      <Card cardTitle={`${formattedDate}`} cardWidth={30}>
        <div className="rightCard cardContentBox">
          <div className="cardTodoBox">
            <TodoBox />
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

  // children 요소 공통 스타일
  .cardContentBox {
    height: 100%;
    padding: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  // 왼쪽 요소 스타일
  .leftCard {
    justify-content: space-between;

    // 이미지 중앙 정렬
    .cardImageBox {
      flex: 1;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .faPlaneDeparture {
      font-size: 6rem;
      color: var(--light-text-color);
    }

    .boardingInfoBox {
      width: 17rem;
      height: 100%;
    }
  }

  // 오른쪽 요소 스타일
  .rightCard {
    flex-direction: column;

    .cardTodoBox {
      width: 100%;
      height: 100%;
    }

    .cardButtonBox {
      width: 100%;
    }
  }
`;
