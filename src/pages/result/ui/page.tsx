import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../../../shared/lib/server/api/apis';
import { Record } from '../../../entity/Records';
import { BackGround } from '../../../shared/ui';

export const ResultPage = () => {
  const {
    isPending,
    error,
    data: timerResult,
  } = useQuery({
    queryKey: ['timerResult'],
    queryFn: () => getData('/timerResult'),
    staleTime: 0,
  });

  if (isPending) {
    return <div>loding...</div>;
  }

  if (error) {
    console.log(error);
    return <div>error</div>;
  }

  return (
    <ResultPageContainer>
      <div className="resultPageContent">
        <BackGround>
          <div className="resultTitleBox">
            <div className="resultTitle">비행 결과</div>
            <div>{`${timerResult?.arrivalInfo.city}/${timerResult?.arrivalInfo.airport}`}</div>
          </div>
        </BackGround>
        <Record timerResult={timerResult}></Record>
      </div>
    </ResultPageContainer>
  );
};

const ResultPageContainer = styled.div`
  padding: var(--spacing-small);
  display: flex;
  flex-direction: column;
  align-items: center;

  .resultPageContent {
    width: 100%;
    max-width: var(--desktop);
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .resultTitleBox {
      display: flex;
      justify-content: space-between;
      font-size: 1rem;
      font-weight: normal;
      color: var(--light-text-color);
    }
    .resultTitle {
    }
  }
`;
