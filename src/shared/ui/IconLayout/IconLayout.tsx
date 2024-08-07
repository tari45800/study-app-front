import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

export const IconLayout = ({ children }: Props) => {
  return <IconLayoutContainer>{children}</IconLayoutContainer>;
};

const IconLayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

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
