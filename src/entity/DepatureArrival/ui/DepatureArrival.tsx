import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { arrivalInfoType } from '../../../shared/model/type';

interface Props {
  arrivalInfo: arrivalInfoType;
  displayUi?: boolean;
}

export const DepatureArrival = ({ arrivalInfo, displayUi = false }: Props) => {
  return (
    <DepatureArrivalContainer displayUi={displayUi}>
      <div className="depatureBox">
        <div className="arrivalInfoTItle">서울 / 인천</div>
        <div className="depatureCite">ICN</div>
      </div>

      <div className="arrowBox">→</div>

      <Link className="link" to="/chooseCite">
        <div className="arrivalBox">
          <div className="arrival">
            <div className="arrivalInfoTItle">{`${arrivalInfo.city} / ${arrivalInfo.airport}`}</div>
            <div className="arrivalCite">{arrivalInfo.arrival}</div>
          </div>
        </div>
      </Link>
    </DepatureArrivalContainer>
  );
};

const DepatureArrivalContainer = styled.div<{ displayUi: boolean }>`
  display: flex;
  align-items: center;
  font-size: 0.7rem;

  .link {
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
`;
