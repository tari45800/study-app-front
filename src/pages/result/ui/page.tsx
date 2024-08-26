import styled from 'styled-components';
import { ArrivalTimeBox } from '../../../entity/arrivalTimeBox';
import { DelayTime } from '../../../shared/lib/DelayTime';
import { BackGround, Button } from '../../../shared/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { postData } from '../../../shared/lib/server/api/apis';

export const ResultPage = () => {
  const navigate = useNavigate();

  return (
    <ResultPageContainer>
      <div className="resultPageContent">
        <div>
          <FontAwesomeIcon className="resultPageIcon" icon={faCircleCheck} />
        </div>
        <div className="resultPageTop">
          <div className="resultPageTime">2시간 30분</div>
          <div className="resultPageClear ">비행완료</div>
        </div>

        <BackGround>
          <div className="resultPageTimeBox">
            <div className="resultPageDelay">20분 지연</div>
            <ArrivalTimeBox
              departureComponent={<DelayTime />}
              arrivalComponent={
                <DelayTime includePausedTimerSeconds={true} offset={'02:00'} />
              }
            />
          </div>
        </BackGround>

        <div className="resultPageButtonBox">
          <Button onClick={() => navigate('/')}>홈으로</Button>
          <Button theme="icon">여행하기</Button>
        </div>
      </div>
    </ResultPageContainer>
  );
};

const ResultPageContainer = styled.div`
  display: flex;
  justify-content: center;

  .resultPageContent {
    flex: 1;
    max-width: var(--desktop);
    padding: var(--spacing-small);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    font-size: 1.5rem;

    .resultPageIcon {
      font-size: 8rem;
      color: var(--prime-color);
    }

    .resultPageTop,
    .resultPageTimeBox,
    .resultPageButtonBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--spacing-large);
      width: 15rem;
    }

    .resultPageTop {
      margin-bottom: 2rem;

      .resultPageTime {
        font-size: 2.5rem;
        font-weight: bold;
      }
      .resultPageClear {
        color: var(--light-text-color);
      }
    }
    .resultPageTimeBox {
      .arrivalTimeBox {
        width: 15rem;
      }
      .arrivalInfoTitle {
        font-size: 1rem;
        font-weight: 600;
      }
      .arrivalInfoContent {
        font-size: 1.5rem;
        font-weight: 600;
      }
      .resultPageDelay {
        font-size: 1rem;
        color: var(--light-text-color);
      }
    }
    .resultPageButtonBox {
      margin-top: 2rem;
      flex-direction: row;
    }
  }
`;
