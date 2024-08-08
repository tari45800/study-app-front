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
        <div className="arrivalInfoTItle ">서울 / 인천</div>
        <div className="depatureCite ">ICN</div>
      </div>

      <div className="arrowBox">→</div>

      <Link className="link" to="/chooseCite">
        <div className="arrivalBox">
          <div className="arrivalInfoTItle">{`${arrivalInfo.city} / ${arrivalInfo.airport} `}</div>
          <div className="arrivalCite">{arrivalInfo.arrival}</div>
        </div>
      </Link>
    </DepatureArrivalContainer>
  );
};

const DepatureArrivalContainer = styled.div`
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
`;
