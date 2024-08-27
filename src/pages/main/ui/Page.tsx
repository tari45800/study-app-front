import styled from 'styled-components';
import { BoardingPass } from '../../../widget/BoardingPass';

export const MainPage = () => {
  return (
    <MainPageContainer>
      <BoardingPass />
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: var(--spacing-small);
`;
