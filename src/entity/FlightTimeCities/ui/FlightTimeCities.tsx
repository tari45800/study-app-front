import styled from 'styled-components';
import { arrivalInfoType } from '../../../shared/model/type';
import { useNavigate } from 'react-router-dom';
import { IconLayout } from '../../../shared/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

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
    <FlightTimeCitiesContainer className="scroll">
      {cities.map((el, idx) => (
        <div
          onClick={() => {
            clickCity(el);
          }}
          className="flightTimeCity"
          key={idx}
        >
          <IconLayout
            left={
              <div className="iconOverflowBox">
                <img src={el.gonfalonImg} alt="국기 이미지" />
              </div>
            }
            top="비행시간"
            bottom={el.city}
            right={
              <FontAwesomeIcon className="faAngleRight" icon={faAngleRight} />
            }
            border={true}
          />
        </div>
      ))}
    </FlightTimeCitiesContainer>
  );
};

const FlightTimeCitiesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  overflow-y: scroll;

  .flightTimeCity {
    cursor: pointer;
  }

  img {
    width: 1.8rem;
    height: 1.8rem;
  }
`;
