import styled from 'styled-components';
import { FlightTime } from '../../../entity/FlightTime';
import { FlightTimeCities } from '../../../entity/FlightTimeCities';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../../../shared/lib/server/api/apis';
import { flight } from '../../../app/appStore';

export const FlightTimeWidget = () => {
  const flightTime = flight((state) => state.flightTime);

  const {
    isPending,
    error,
    data: cities,
  } = useQuery({
    queryKey: ['flightTimeCities'],
    queryFn: () => getData(`/flights?flightTime=${flightTime}`),
  });

  if (isPending) {
    return <div>loding...</div>;
  }

  if (error) {
    console.log(error);
    return <div>error</div>;
  }

  console.log(cities);

  return (
    <FlightTimeWidgetContainer>
      <div>{flightTime}</div>
      <FlightTime></FlightTime>
      <FlightTimeCities></FlightTimeCities>
    </FlightTimeWidgetContainer>
  );
};

const FlightTimeWidgetContainer = styled.div``;
