import styled from 'styled-components';
import { formattedDate } from '../../../shared/lib';
import { BoardingInfo } from '../../BoardingInfo';

export const BoardingPass = () => {
  return (
    <BoardingPassContainer>
      <RightCard>
        <div className="bPTop">탑승권</div>
        <div className="bPContentBox">
          <div className="image">img</div>
          {/* <FSDLine color="widget"> */}
          <div className="bPInFo">
            <BoardingInfo />
          </div>
          {/* </FSDLine> */}
        </div>
      </RightCard>
      <LeftCard>
        <div className="bPTop">{formattedDate}</div>
        <div className="bPContentBox">
          <div className="bPtodoWidget">투두 위젯</div>
          <div className="bPbuttonBox">예약하기 피쳐</div>
        </div>
      </LeftCard>
    </BoardingPassContainer>
  );
};

const BoardingPassContainer = styled.div`
  width: 100%;
  max-width: var(--desktop);
  height: 15rem;
  display: flex;
  gap: 0.1rem;

  .bPTop {
    border-bottom: 0.1rem solid var(--background-color);
    padding: 1rem;
  }
`;

const RightCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  background-color: white;
  border-radius: var(--background-radius);

  .bPContentBox {
    display: flex;
    flex: 1;
    padding: 1rem;

    .image {
      flex: 1;
    }

    .bPInFo {
      width: 12rem;
    }
  }
`;

const LeftCard = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;

  background-color: white;
  border-radius: var(--background-radius);

  .bPContentBox {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;

    .bPtodoWidget {
      flex: 1;
    }

    .bPbuttonBox {
    }
  }
`;
