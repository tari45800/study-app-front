import styled from 'styled-components';
import { FlightTime } from '../../../entity/FlightTime';
import { FlightTimeCities } from '../../../entity/FlightTimeCities';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../../../shared/lib/server/api/apis';
import { flightStore } from '../../../app/appStore';
import { useEffect } from 'react';
import { arrivalInfoType } from '../../../shared/model/type';
import { Line } from '../../../shared/ui';
import { getStoragedData } from '../../../shared/lib/getStorageData';

export const FlightTimeWidget = () => {
  const { flightTime, changeFlightTime } = flightStore();

  // 최근 여행지 정보를 받아오는 쿼리
  const { isPending: flightPending, data: arrival } = useQuery<
    arrivalInfoType[]
  >({
    queryKey: ['arrivalInfo'],
    queryFn: () => getData('/arrival'),
  });

  // 선택할 수 있는 여행지 정보 받아오는 쿼리
  const {
    isPending,
    error,
    data: cities,
  } = useQuery({
    queryKey: ['flightTimeCities', flightTime],
    queryFn: () => getData(`/flights?flightTime=${flightTime}`),
  });

  // 스토리지에 데이터가 없다면 최근 여행지의 시간으로 초기화하는 코드
  useEffect(() => {
    const storageArrivalInfo = getStoragedData('arrivalInfo');

    // 만약 스토리지에 데이터가 없고
    // 최근 여행지를 받아오는 중이 아니고
    // 최근 여행지가 있다면
    // 비행시간을 최근 여행지의 시간으로 설정
    if (!storageArrivalInfo && arrival) {
      changeFlightTime(arrival[0].time);
    }
  }, [flightPending]);

  if (isPending) {
    return <div>loding...</div>;
  }

  if (error) {
    console.log(error);
    return <div>error</div>;
  }

  return (
    <FlightTimeWidgetContainer>
      <FlightTime />
      <Line />
      <FlightTimeCities cities={cities} />
    </FlightTimeWidgetContainer>
  );
};

const FlightTimeWidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;

  min-height: 10rem;
`;
