import styled from 'styled-components';
import { arrivalInfoType } from '../../../shared/model/type';
import { useNavigate } from 'react-router-dom';

interface Props {
  cities: arrivalInfoType[];
}

export const FlightTimeCities = ({ cities }: Props) => {
  const navigate = useNavigate();
  const clickCity = (arrivalInfo: arrivalInfoType) => {
    localStorage.setItem('arrivalInfo', JSON.stringify(arrivalInfo));
    navigate('/');
  };

  return (
    <FlightTimeCitiesContainer>
      {cities.map((el, idx) => (
        <div
          onClick={() => {
            clickCity(el);
          }}
          className="flightTimeCity"
          key={idx}
        >
          {el.city}
        </div>
      ))}
    </FlightTimeCitiesContainer>
  );
};

const FlightTimeCitiesContainer = styled.div`
  border: 5px solid red;
  overflow: auto;
  flex: 1;

  .flightTimeCity {
    padding: 1rem;
    border: 0.2rem solid green;
    cursor: pointer;
  }
`;
