import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

export const BackGround = ({ children }: Props) => {
  return <BackGroundContainer>{children}</BackGroundContainer>;
};

const BackGroundContainer = styled.div`
  background-color: white;
  padding: var(--spacing-large);
  border-radius: var(--background-radius);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 3px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
