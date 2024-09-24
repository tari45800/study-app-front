import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { arrivalInfoType } from '../../../shared/model/type';

interface Props {
  arrivalInfo: arrivalInfoType | null;
  arrivalButtonUi?: boolean;
}

export const DepatureArrival = ({
  arrivalInfo,
  arrivalButtonUi = false,
}: Props) => {
  return (
    // $ 접두사를 사용하면 해당 prop이 "transient" prop임을 나타냅니다. 이 접두사가 있는 prop은 styled-component로 전달되지만, 실제 HTML 요소로 전달되지 않습니다.
    <DepatureArrivalContainer $arrivalButtonUi={arrivalButtonUi}>
      {/* 출발지 */}
      <div className="depatureBox">
        <div className="depatureArrivalTItle">서울 / 인천</div>
        <div className="depatureCite">ICN</div>
      </div>

      <div className="arrowBox">→</div>

      {/* 도착지 */}
      <Link className="linkBox" to="/chooseCite">
        {arrivalInfo ? (
          <div className="arrivalBox">
            {/* 도착지 선택 완료 했을 때 보이는 버튼 ui */}
            <div className="arrivalButtonUi">
              <div className="depatureArrivalTItle">{`${arrivalInfo.city} / ${arrivalInfo.airport}`}</div>
              <div className="arrivalCite">{arrivalInfo.arrival}</div>
            </div>
          </div>
        ) : (
          // 여행지 선택 버튼 ui
          <div className="arrivalBox">
            <div className="arrivalButtonUi chooseCiteButton">여행지 선택</div>
          </div>
        )}
      </Link>
    </DepatureArrivalContainer>
  );
};

const DepatureArrivalContainer = styled.div<{ $arrivalButtonUi: boolean }>`
  display: flex;
  align-items: center;
  font-size: 0.7rem;

  .depatureBox,
  .arrivalBox,
  .arrowBox {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .depatureCite,
  .arrivalCite {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .arrivalBox {
    height: 3.5rem;
  }

  .linkBox {
    flex: 1;
  }

  // 도착지 선택 완료 했을 때 보이는 버튼 ui
  .arrivalButtonUi {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: var(--background-radius);

    .depatureArrivalTItle,
    .arrivalCite {
      transition: 0.2s;
    }

    ${({ $arrivalButtonUi }) =>
      $arrivalButtonUi &&
      `
      background: var(--background-color);
      border: 0.01rem solid var(--light-text-color);
      padding: 0.5rem;
      transition: 0.2s;

      &:hover {
        width: calc(100% - 0.2rem);
        height: 3.3rem;

        .depatureArrivalTItle {
          font-size: 0.65rem;
        }
        
        .arrivalCite {
          font-size: 1.45rem;
        }
      }
    `}
  }

  // 여행지 선택 버튼 ui
  .chooseCiteButton {
    height: 100%;
    color: white;
    background-color: var(--prime-color);
    border: none;
    font-size: 0.8rem;
    font-weight: bold;
  }

  .chooseCiteButton:hover {
    font-size: 0.75rem;
  }
`;
