import styled from 'styled-components';
import { BackGround, IconLayout } from '../../../shared/ui';
import { FlightTimeWidget } from '../../../widget/FlightTimeWidget';
import { DepatureArrival } from '../../../entity/DepatureArrival';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../../../shared/lib/server/api/apis';

export const ChooseCitePage = () => {
  const {
    isPending,
    error,
    data: arrival,
  } = useQuery({
    queryKey: ['arrivalInfo'],
    queryFn: () => getData('/arrival'),
  });

  if (isPending) {
    return <div>loding...</div>;
  }

  if (error) {
    console.log(error);
    return <div>error</div>;
  }

  const storedArrivalInfo = localStorage.getItem('arrivalInfo');

  // 로컬 스토리지에 값이 있으면 그것을 사용하고, 그렇지 않으면 arrival[0] 사용
  const arrivalInfo = storedArrivalInfo
    ? JSON.parse(storedArrivalInfo)
    : arrival && arrival[0];

  return (
    <ChooseCitePageContainer>
      <div className="chooseCitePageContent">
        <BackGround>
          <div className="chooseCiteTop">
            <div className="CCTDepatureArrival">
              <DepatureArrival arrivalInfo={arrivalInfo} />
            </div>
            <div className="image"></div>
          </div>
        </BackGround>

        <div className="chooseCiteBottom">
          <div className="flightTimeWidget">
            <BackGround>
              <FlightTimeWidget></FlightTimeWidget>
            </BackGround>
          </div>
          <div className="cityRanking">
            <BackGround>
              <div>여행지 둘러보기</div>
            </BackGround>
          </div>
        </div>
      </div>
    </ChooseCitePageContainer>
  );
};

const ChooseCitePageContainer = styled.div`
  padding: var(--spacing-small);
  width: 100%;
  display: flex;
  justify-content: center;

  .chooseCitePageContent {
    width: 100%;
    max-width: var(--desktop);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-small);
  }

  .chooseCiteTop {
    flex: 1;
    display: flex;

    .CCTDepatureArrival {
      width: 17rem;
    }

    .image {
      flex: 1;
    }
  }

  .chooseCiteBottom {
    display: flex;
    gap: var(--spacing-small);
    height: 15rem;
  }

  .flightTimeWidget {
    flex: 1;
  }

  .cityRanking {
    flex: 1;
  }
`;
