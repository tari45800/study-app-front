import styled from 'styled-components';
import { IconLayout } from '../../../shared/ui';

export const TodoBox = () => {
  return (
    <TodoBoxContainer>
      <IconLayout
        left={<div>네모</div>}
        bottom="todo"
        right={<div>수정</div>}
      />
    </TodoBoxContainer>
  );
};

const TodoBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;
