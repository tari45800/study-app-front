import path from 'path';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
Outlet;

const BaseLayoutContainer = styled.div`
  border: 0.5rem solid black;
  padding: 1rem;
  color: var(--light-text-color);
`;

export const baseLayout = (
  <BaseLayoutContainer>
    <div> 계좌개설 | 카드발급 | 대출받기 </div>
    <Outlet />
  </BaseLayoutContainer>
);
