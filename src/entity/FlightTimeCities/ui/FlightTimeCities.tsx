import styled from 'styled-components';
import { arrivalInfoType } from '../../../shared/model/type';
import { useNavigate } from 'react-router-dom';
import { IconLayout } from '../../../shared/ui';

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
          <IconLayout>
            <div className="IconLayoutRight">🙂</div>
            <div className="IconLayoutMiddleBox">
              <div className="IconLayoutTop">비행시간</div>
              <div className="IconLayoutBottom">{el.city}</div>
            </div>
            <div className="IconLayoutLeft">〉</div>
          </IconLayout>
        </div>
      ))}
    </FlightTimeCitiesContainer>
  );
};

const FlightTimeCitiesContainer = styled.div`
  overflow: auto;
  flex: 1;

  .flightTimeCity {
    padding: 1rem;
    cursor: pointer;
  }
`;
