import styled from 'styled-components';
import { IconLayout } from '../../../shared/ui';
import { FlightTimeWidget } from '../../../widget/FlightTimeWidget';

export const ChooseCitePage = () => {
  return (
    <ChooseCitePageContainer>
      <div className="chooseCiteTop">여행지 선택 상단</div>
      <div className="chooseCiteBottom">
        <div className="flightTimeWidget">
          <FlightTimeWidget></FlightTimeWidget>
        </div>
        <div className="cityRanking">여행지 둘러보기</div>
      </div>
    </ChooseCitePageContainer>
  );
};

const ChooseCitePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  .chooseCiteTop {
    flex: 1;
    border: 2px solid black;
  }

  .chooseCiteBottom {
    border: 2px solid black;
    display: flex;
    gap: 1rem;
    height: 15rem;
  }

  .flightTimeWidget {
    flex: 1;
  }

  .cityRanking {
    flex: 1;
  }
`;