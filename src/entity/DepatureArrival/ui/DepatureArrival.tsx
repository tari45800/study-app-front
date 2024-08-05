import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { arrivalInfoType } from '../../../shared/model/type';

interface Props {
  arrivalInfo: arrivalInfoType;
}

export const DepatureArrival = ({ arrivalInfo }: Props) => {
  return (
    <DepatureArrivalContainer>
      <div className="depatureBox ">
        <div className="depatureCite ">ICN</div>
        <div className="depatureInfo ">서울 / 인천</div>
      </div>

      <div className="arrowBox">→</div>

      <Link className="link" to="/chooseCite">
        <div className="arrivalBox">
          <div className="arrivalCite">{arrivalInfo.arrival}</div>
          <div className="arrivalInfo">{`${arrivalInfo.city} / ${arrivalInfo.airport} `}</div>
        </div>
      </Link>
    </DepatureArrivalContainer>
  );
};

const DepatureArrivalContainer = styled.div`
  display: flex;
  height: 100%;
  font-size: 0.7rem;

  .link {
    flex: 1;
  }

  .depatureBox,
  .arrivalBox,
  .arrowBox {
    height: 100%;
    /* border: 0.1rem solid black; */
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div {
      flex: 0 0 0;
    }
  }

  .depatureCite,
  .arrivalCite {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .depatureInfo,
  .arrivalInfo {
    font-size: 0.6rem;
    display: flex;
  }
`;
