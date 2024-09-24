import styled from 'styled-components';
import { BoardingPass } from '../../../widget/BoardingPass';
import { Results } from '../../../widget/Results/ui/Results';

export const MainPage = () => {
  return (
    <MainPageContainer>
      <BoardingPass />
      <Results />
    </MainPageContainer>
  );
};

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-small);

  padding: var(--spacing-small);
`;
