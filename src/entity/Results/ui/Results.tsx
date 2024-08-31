import styled from 'styled-components';
import { BackGround, IconLayout } from '../../../shared/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface ArrivalInfo {
  arrival: string;
  city: string;
  airport: string;
  time: string;
}

interface Todo {
  todoId: number;
  todoContent: string;
  todoState: boolean;
}

interface FlightResult {
  arrivalInfo: ArrivalInfo;
  arrivalTime: string;
  delayTime: string;
  departureTime: string;
  flightTime: string;
  todos: Todo[];
}

export const Results = () => {
  const storedtimerResultso = localStorage.getItem('timerResults');
  const timerResults: FlightResult[] | null = storedtimerResultso
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
                <div className="resultBox" key={idx}>
                  <IconLayout>
                    <div className="IconLayoutRight">🙂</div>
                    <div className="IconLayoutMiddleBox">
                      <div className="IconLayoutTop">
                        {el.departureTime} 출발
                      </div>
                      <div className="IconLayoutBottom">
                        {`${el.arrivalInfo.city}/${el.arrivalInfo.airport}`}
                      </div>
                    </div>
                    <div className="IconLayoutLeft">
                      <FontAwesomeIcon
                        className="faAngleRight"
                        icon={faAngleRight}
                      />
                    </div>
                  </IconLayout>
                </div>
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
    gap: var(--spacing-small);

    .resultsTitle {
      font-weight: bold;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    .resultBox {
      cursor: pointer;
      padding: 0.5rem;
    }
    .ResultsNull {
      color: var(--light-text-color);
    }
  }
`;
