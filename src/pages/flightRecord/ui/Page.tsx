import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

export const FlightRecordPage = () => {
  const location = useLocation();
  const { idx } = location.state || {}; // idx 값을 받음

  console.log(idx);
  return (
    <FlightRecordPageContainer>
      <div className="flightRecordContentBox">비행 기록</div>
    </FlightRecordPageContainer>
  );
};

const FlightRecordPageContainer = styled.div`
  padding: var(--spacing-small);
  width: 100%;
  display: flex;
  justify-content: center;

  .flightRecordContentBox {
    width: 100%;
    max-width: var(--desktop);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-small);
  }
`;
