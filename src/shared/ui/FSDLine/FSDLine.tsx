import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
  color: 'widget' | 'feature' | 'entity';
};

const colors = {
  widget: '--widget-color',
  feature: '--feature-color',
  entity: '--entity-color',
};

export const FSDLine = ({ children, color }: Props) => {
  return (
    <FSDLineContainer color={colors[color]}>
      <div className="line">
        <div className="lineName">{color}</div>
        <div className="childrenBox">{children}</div>
      </div>
    </FSDLineContainer>
  );
};

const FSDLineContainer = styled.div<{ color: string }>`
  > .line {
    border: 0.2rem solid var(${(props) => props.color});

    > .lineName {
      padding: 0.1rem 0.3rem 0.3rem 0.1rem;
      background-color: var(${(props) => props.color});
      width: fit-content;
      color: white;
      font-size: 0.7rem;
    }

    > .childrenBox {
      padding: 0.5rem;
    }
  }
`;
