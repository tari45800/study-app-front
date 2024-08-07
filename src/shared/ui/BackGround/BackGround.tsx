import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

export const BackGround = ({ children }: Props) => {
  return <BackGroundContainer>{children}</BackGroundContainer>;
};

const BackGroundContainer = styled.div`
  background-color: white;
  padding: 0.5rem;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
