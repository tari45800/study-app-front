import styled from 'styled-components';
import { BackGround } from '../../../shared/ui';
import { FlightResultType } from '../../../shared/model/type';
import Observer from '../../../shared/ui/Observer/Observer';
import { getStoragedData } from '../../../shared/lib/getStorageData';
import { TimerResults } from '../../../entity/TimerResults';

export const Results = () => {
  const timerResultsData = getStoragedData<FlightResultType[]>('timerResults');

  return (
    <ResultsContainer>
      <Observer id="ResultsBackGround">
        <BackGround>
          <div className="resultsContentBox">
            <div className="resultsTitle">비행 기록</div>
            <TimerResults timerResultsData={timerResultsData} />
          </div>
        </BackGround>
      </Observer>
    </ResultsContainer>
  );
};

const ResultsContainer = styled.div`
  width: 100%;
  max-width: var(--desktop);

  .resultsContentBox {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

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
