import styled from 'styled-components';
import { FlightTime } from '../../../entity/FlightTime';
import { FlightTimeCities } from '../../../entity/FlightTimeCities';
import { useQuery } from '@tanstack/react-query';
import { getData } from '../../../shared/lib/server/api/apis';
import { flight } from '../../../app/appStore';
import { arrivalInfoType } from '../../../shared/model/type';

export const FlightTimeWidget = () => {
  const flightTime = flight((state) => state.flightTime);

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
