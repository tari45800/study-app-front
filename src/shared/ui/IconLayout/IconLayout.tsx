import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  className?: string;
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
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .IconLayoutRight {
    font-size: 2rem;
    margin-right: 0.5rem;
  }

  .IconLayoutTop {
    font-size: 0.7rem;
    color: var(--light-text-color);
  }

  .IconLayoutBottom {
    font-size: 1rem;
    font-weight: 600;
  }
`;
