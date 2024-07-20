import path from 'path';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { LayoutHeader } from '../../widget/LayoutHeader';

const BaseLayoutContainer = styled.div`
  border: 0.5rem solid black;
  padding: 1rem;
  color: var(--light-text-color);
`;

export const baseLayout = (
  <BaseLayoutContainer>
    <LayoutHeader />
    <Outlet />
  </BaseLayoutContainer>
);
