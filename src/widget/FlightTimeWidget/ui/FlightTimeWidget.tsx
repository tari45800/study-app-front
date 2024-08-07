import styled from 'styled-components';
import { FlightTime } from '../../../entity/FlightTime';
import { FlightTimeCities } from '../../../entity/FlightTimeCities';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../../../shared/lib/server/api/apis';
import { flightStore } from '../../../app/appStore';
import { useEffect } from 'react';
import { arrivalInfoType } from '../../../shared/model/type';
import { Line } from '../../../shared/ui';

export const FlightTimeWidget = () => {
  const { flightTime, changeFlightTime } = flightStore();

  const { isPending: flightPending, data: arrival } = useQuery<
    arrivalInfoType[]
  >({
    queryKey: ['arrivalInfo'],
    queryFn: () => getData('/arrival'),
  });

  useEffect(() => {
    const localStorageArrivalInfo = localStorage.getItem('arrivalInfo');

    if (!localStorageArrivalInfo && !flightPending && arrival) {
      changeFlightTime(arrival[0].time);
    }
  }, [flightPending, arrival]);

  const {
    isPending,
    error,
    data: cities,
  } = useQuery({
    queryKey: ['flightTimeCities', flightTime],
    queryFn: () => getData(`/flights?flightTime=${flightTime}`),
  });

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
