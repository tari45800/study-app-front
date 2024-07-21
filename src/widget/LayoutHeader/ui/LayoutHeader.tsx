import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LayoutHeader = () => {
  return (
    <LayoutHeaderContainer>
      <Link to={'/'}>
        <div>로고</div>
      </Link>
      <div className="headerFeatureContauner">
        <Link to={'/login'}>
          <div>로그인</div>
        </Link>
        <Link to={'/notice'}>
          <div>알림</div>
        </Link>
      </div>
    </LayoutHeaderContainer>
  );
};

const LayoutHeaderContainer = styled.div`
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .headerFeatureContauner {
    display: flex;
    gap: 1rem;
  }
`;