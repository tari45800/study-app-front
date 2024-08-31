import styled from 'styled-components';

type Props = {
  left?: React.ReactNode;
  top?: React.ReactNode;
  bottom?: React.ReactNode;
  right?: React.ReactNode;
  iconBackgrondColor?: string;
  border?: boolean;
};

export const IconLayout = ({
  left,
  top,
  bottom,
  right,
  iconBackgrondColor = 'none',
  border = false,
}: Props) => {
  console.log(left);
  return (
    <IconLayoutContainer
      iconBackgrondColor={iconBackgrondColor}
      border={border}
    >
      <div className="iconLayoutLeft">{left}</div>
      <div className="iconLayoutMiddleBox">
        <div className="iconLayoutTop">{top}</div>
        <div className="iconLayoutBottom">{bottom}</div>
      </div>
      <div className="iconLayoutRight">{right}</div>
    </IconLayoutContainer>
  );
};

const IconLayoutContainer = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;

  .iconLayoutMiddleBox {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .iconLayoutLeft {
    font-size: 2rem;
    margin-right: 0.5rem;
  }

  .iconLayoutTop {
    font-size: 0.7rem;
    color: var(--light-text-color);
  }

  .iconLayoutBottom {
    font-size: 1rem;
    font-weight: 600;
  }

  .iconOverflowBox {
    background-color: ${({ iconBackgrondColor }) => iconBackgrondColor};
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    font-size: 1.8rem;
    border: ${({ border }) => (border ? '1px solid #e8e8e8;' : 'none')};
  }
`;
