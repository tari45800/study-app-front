import styled from 'styled-components';
import { BackGround, IconLayout } from '../../../shared/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { arrivalInfoType } from '../../../shared/model/type';

interface Todo {
  todoId: number;
  todoContent: string;
  todoState: boolean;
}

interface FlightResult {
  arrivalInfo: arrivalInfoType;
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
    }
    .resultBox {
      cursor: pointer;
      padding: 0 0.5rem;
    }
    .ResultsNull {
      color: var(--light-text-color);
    }
  }
`;
