import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { arrivalInfoType } from '../../../shared/model/type';

interface Props {
  arrivalInfo: arrivalInfoType | null;
  displayUi?: boolean;
}

export const DepatureArrival = ({ arrivalInfo, displayUi = false }: Props) => {
  return (
    <DepatureArrivalContainer displayUi={displayUi}>
      {/* 출발지 */}
      <div className="depatureBox">
        <div className="arrivalInfoTItle">서울 / 인천</div>
        <div className="depatureCite">ICN</div>
      </div>

      <div className="arrowBox">→</div>

      {/* 도착지 */}
      <Link className="linkBox" to="/chooseCite">
        {arrivalInfo ? (
          <div className="arrivalBox">
            <div className="arrival">
              <div className="arrivalInfoTItle">{`${arrivalInfo.city} / ${arrivalInfo.airport}`}</div>
              <div className="arrivalCite">{arrivalInfo.arrival}</div>
            </div>
          </div>
        ) : (
          <div className="arrivalBox">
            <div className="arrival chooseCiteButton">여행지 선택</div>
          </div>
        )}
      </Link>
    </DepatureArrivalContainer>
  );
};

const DepatureArrivalContainer = styled.div<{ displayUi: boolean }>`
  display: flex;
  align-items: center;
  font-size: 0.7rem;

  .linkBox {
    flex: 1;
  }

  .depatureBox,
  .arrivalBox,
  .arrowBox {
    height: 100%;
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
    width: 100%;
    height: 3.5rem;
  }

  .arrival {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${({ displayUi }) =>
      displayUi &&
      `
      background: var(--background-color);
      border-radius: var(--background-radius);
      border: 1px solid var(--light-text-color);
      padding: 0.5rem;
      transition: 0.2s;
    `}

    .arrivalInfoTItle,
    .arrivalCite {
      ${({ displayUi }) => displayUi && 'transition: 0.2s;'}
    }

    ${({ displayUi }) =>
      displayUi &&
      `
      &:hover {
        width: calc(100% - 0.2rem);
        height: 3.3rem;

        .arrivalInfoTItle {
          font-size: 0.65rem;
        }
        
        .arrivalCite {
          font-size: 1.45rem;
        }
      }
    `}
  }

  .chooseCiteButton {
    border: none;
    height: 100%;
    font-size: 0.8rem;
    font-weight: bold;
    color: white;
    background-color: var(--prime-color);
  }

  .chooseCiteButton:hover {
    font-size: 0.75rem;
  }
`;
