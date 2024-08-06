import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

export const IconLayout = ({ children }: Props) => {
  return <IconLayoutContainer>{children}</IconLayoutContainer>;
};

const IconLayoutContainer = styled.div`
  max-width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 1rem;

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
