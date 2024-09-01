import styled from 'styled-components';
import { BackGround, IconLayout } from '../../../shared/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FlightResultType } from '../../../shared/model/type';

export const Results = () => {
  const storedtimerResultso = localStorage.getItem('timerResults');
  const timerResults: FlightResultType[] | null = storedtimerResultso
    ? JSON.parse(storedtimerResultso)
    : null;

  return (
    <ResultsContainer>
      <BackGround>
        <div className="resultsContentBox">
          <div className="resultsTitle">비행 기록</div>
          {timerResults ? (
            timerResults.map((el, idx) => {
              console.log(el);
              return (
                <Link to={'/flightTime'} state={{ idx }}>
                  <div className="resultBox" key={idx}>
                    <IconLayout
                      left={
                        <div className="iconOverflowBox">
                          <img
                            src={el.arrivalInfo.gonfalonImg}
                            alt="국기 이미지"
                          />
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
            <div className="ResultsNull">
              비행 기록이 없습니다. 여행을 떠나보세요!
            </div>
          )}
        </div>
      </BackGround>
    </ResultsContainer>
  );
};

const ResultsContainer = styled.div`
  width: 100%;
  max-width: var(--desktop);

  .resultsContentBox {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .resultsTitle {
      font-weight: bold;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      margin-top: 0.5rem;
    }
    .resultBox {
      cursor: pointer;
      padding: 0 0.5rem;
    }
    .ResultsNull {
      color: var(--light-text-color);
    }
  }

  img {
    width: 1.8rem;
    height: 1.8rem;
  }
`;
