import styled from 'styled-components';
import { arrivalInfoType } from '../../../shared/model/type';

interface Props {
  cities: arrivalInfoType[];
}

export const FlightTimeCities = ({ cities }: Props) => {
  return (
    <FlightTimeCitiesContainer>
      {cities.map((el, idx) => (
        <div key={idx}>{el.city}</div>
      ))}
    </FlightTimeCitiesContainer>
  );
};

const FlightTimeCitiesContainer = styled.div``;
