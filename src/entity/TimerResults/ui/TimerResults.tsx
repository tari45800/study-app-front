import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconLayout } from '../../../shared/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FlightResultType } from '../../../shared/model/type';

interface Props {
  timerResultsData: FlightResultType[] | null;
}
export const TimerResults = ({ timerResultsData }: Props) => {
  return (
    <TimerResultsContianer>
      {timerResultsData ? (
        timerResultsData.map((el, idx) => {
          return (
            <Link to={'/flightTime'} state={{ idx }} key={idx}>
              <div className="resultBox">
                <IconLayout
                  left={
                    <div className="iconOverflowBox">
                      <img src={el.arrivalInfo.gonfalonImg} alt="국기 이미지" />
                    </div>
                  }
                  top={`${el.departureTime} 출발`}
                  bottom={`${el.arrivalInfo.city}/${el.arrivalInfo.airport}`}
                  right={
                    <FontAwesomeIcon
                      className="faAngleRight"
                      icon={faAngleRight}
                    />
                  }
                  border={true}
                />
              </div>
            </Link>
          );
        })
      ) : (
        <div className="resultsNull">
          비행 기록이 없습니다. 여행을 떠나보세요!
        </div>
      )}
    </TimerResultsContianer>
  );
};

const TimerResultsContianer = styled.div`
  .resultBox {
    cursor: pointer;
    padding: 0 0.5rem;
  }

  .resultsNull {
    color: var(--light-text-color);
  }

  img {
    width: 1.8rem;
    height: 1.8rem;
  }
`;
