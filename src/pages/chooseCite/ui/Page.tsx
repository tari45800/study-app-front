import styled from 'styled-components';
import { BackGround } from '../../../shared/ui';
import { FlightTimeWidget } from '../../../widget/FlightTimeWidget';
import { DepatureArrival } from '../../../entity/DepatureArrival';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../../../shared/lib/server/api/apis';
import { Observer } from '../../../shared/ui/Observer/Observer';
import { getStoragedData } from '../../../shared/lib/getStorageData';
import { arrivalInfoType } from '../../../shared/model/type';

export const ChooseCitePage = () => {
  // 최근 여행지 정보를 받아오는 쿼리
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

  const storedArrivalInfo = getStoragedData<arrivalInfoType>('arrivalInfo');

  // 로컬 스토리지에 값이 있으면 사용하고, 그렇지 않으면 서버 데이터 사용
  const arrivalInfo = storedArrivalInfo || (arrival && arrival[0]);

  return (
    <ChooseCitePageContainer>
      <div className="chooseCitePageContent">
        {/* 여행지 선택 탑 */}
        <BackGround>
          <div className="chooseCiteTop">
            <div className="chooseCiteTopDepatureArrival">
              <DepatureArrival arrivalInfo={arrivalInfo} />
            </div>
            <div className="image"></div>
          </div>
        </BackGround>

        <div className="chooseCiteBottom">
          {/* 비행시간 */}
          <div className="flightTimeWidget">
            <Observer id="FlightTimeBackGround">
              <BackGround>
                <FlightTimeWidget />
              </BackGround>
            </Observer>
          </div>

          {/* 여행지 둘러보기 */}
          <div className="cityRanking">
            <Observer id="FlightTimeBackGround" delay={0.5}>
              <BackGround>
                <div>여행지 둘러보기</div>
              </BackGround>
            </Observer>
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

    .chooseCiteTopDepatureArrival {
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
    z-index: 100;
  }

  .cityRanking {
    flex: 1;
  }
`;
