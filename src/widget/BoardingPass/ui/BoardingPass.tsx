import styled from 'styled-components';
import { formattedDate } from '../../../shared/lib';
import { BoardingInfo } from '../../BoardingInfo';
import { Button } from '../../../shared/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

export const BoardingPass = () => {
  return (
    <BoardingPassContainer>
      <RightCard>
        <div className="bPTop bPTopRight">
          {/* <FontAwesomeIcon className="faPlane" icon={faPlane} /> */}
          <div>tari45800님</div>
          탑승권
        </div>
        <div className="bPContentBox">
          <div className="image">
            <FontAwesomeIcon className="faPlaneDeparture" icon={faPlane} />
          </div>
          <div className="bPInFo">
            <BoardingInfo />
          </div>
        </div>
        {/* <div className="bPBottom"></div> */}
      </RightCard>
      <LeftCard>
        <div className="bPTop">{formattedDate}</div>
        <div className="bPContentBox">
          <div className="bPtodoWidget">투두 위젯</div>
          <div className="bPbuttonBox">
            <Button theme="primary">예약하기</Button>
          </div>
        </div>
        {/* <div className="bPBottom"></div> */}
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
    padding: 0.7rem 1rem;
    font-weight: 500;
    font-size: 0.8rem;

    background-color: var(--prime-color);
    color: white;
    border-top-right-radius: var(--background-radius);
    border-top-left-radius: var(--background-radius);
  }

  .bPTopRight {
    display: flex;
    gap: 0.5rem;
  }

  .bPBottom {
    height: 1rem;
    background-color: var(--prime-color);
    border-bottom-left-radius: var(--background-radius);
    border-bottom-right-radius: var(--background-radius);
  }

  .faPlane {
    margin-right: 0.5rem;
  }

  .faPlaneDeparture {
    font-size: 6rem;
    color: var(--light-text-color);
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
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .bPInFo {
      width: 17rem;
    }
  }
`;

const LeftCard = styled.div`
  width: 20rem;
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
