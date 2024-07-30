import styled from 'styled-components';

export const ChooseCitePage = () => {
  return (
    <ChooseCitePageContainer>
      <div className="chooseCiteTop">여행지 선택 상단</div>
      <div className="chooseCiteBottom">
        <div className="flightTime">비행시간</div>
        <div className="cityRanking">여행지 둘러보기</div>
      </div>
    </ChooseCitePageContainer>
  );
};

const ChooseCitePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  border: 2px solid black;
  height: 20rem;

  .chooseCiteTop {
    flex: 1;
    border: 2px solid black;
  }

  .chooseCiteBottom {
    border: 2px solid black;
    flex: 3;
    display: flex;
    gap: 1rem;
  }

  .flightTime {
    flex: 1;
    border: 2px solid red;
  }

  .cityRanking {
    flex: 1;
    border: 2px solid orange;
  }
`;
