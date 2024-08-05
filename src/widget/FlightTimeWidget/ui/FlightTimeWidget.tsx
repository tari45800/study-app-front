import styled from 'styled-components';
import { FlightTime } from '../../../entity/FlightTime';
import { FlightTimeCities } from '../../../entity/FlightTimeCities';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../../../shared/lib/server/api/apis';
import { flight } from '../../../app/appStore';
import { useEffect } from 'react';

export const FlightTimeWidget = () => {
  const flightTime = flight((state) => state.flightTime);
  const changeFlightTime = flight((state) => state.changeFlightTime);

  // const { data: arrival } = useQuery({
  //   queryKey: ['arrivalInfo'],
  //   queryFn: () => getData('/arrival'),
  // });

  // useEffect(() => {
  //   if (arrival) {
  //     console.log(arrival[0].time);
  //     changeFlightTime(arrival[0].time);
  //   }
  // }, []);

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
      <FlightTimeCities cities={cities}></FlightTimeCities>
    </FlightTimeWidgetContainer>
  );
};

const FlightTimeWidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
