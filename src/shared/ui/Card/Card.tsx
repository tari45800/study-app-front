import { type ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  cardTitle: string;
  children: ReactNode;
};

export const Card = ({ cardTitle, children }: Props) => {
  return (
    <CardContainer>
      <div className="cardContent">
        <div className="cardTop">{cardTitle}</div>
        <div className="cardBody"> {children}</div>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  .cardContent {
    height: 100%;
    background-color: var(--background-ui-color);
    border-radius: var(--background-radius);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 3px;

    display: flex;
    flex-direction: column;
  }

  .cardTop {
    padding: 0.7rem 1rem;
    background-color: var(--prime-color);
    color: white;
    font-weight: 500;
    font-size: 0.8rem;

    border-top-right-radius: var(--background-radius);
    border-top-left-radius: var(--background-radius);
    border-bottom: 0.1rem solid var(--background-color);
  }

  .cardBody {
    height: 100%;
  }
`;
