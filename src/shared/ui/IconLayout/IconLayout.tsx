import styled from 'styled-components';

type Props = {
  top?: boolean;
  bottom?: boolean;
  right?: boolean;
  left?: boolean;
};

export const IconLayout = ({
  top = true,
  bottom = true,
  right = true,
  left = true,
}: Props) => {
  return (
    <IconLayoutContainer>
      {right && <div className="IconLayoutRight">🙂</div>}

      <div className="IconLayoutMiddleBox">
        {top && <div className="IconLayoutTop">비행시간</div>}
        {bottom && <div className="IconLayoutBottom">1시간 30분</div>}
      </div>

      {left && <div className="IconLayoutLeft">〉</div>}
    </IconLayoutContainer>
  );
};

const IconLayoutContainer = styled.div`
  max-width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  .IconLayoutMiddleBox {
    flex: 1;
  }

  .IconLayoutRight {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }

  .IconLayoutTop {
    font-size: 0.5rem;
    color: var(--light-text-color);
  }

  .IconLayoutBottom {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;
