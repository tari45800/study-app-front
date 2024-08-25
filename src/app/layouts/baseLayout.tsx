import path from 'path';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { LayoutHeader } from '../../widget/LayoutHeader';

const BaseLayoutContainer = styled.div`
  background-color: var(--background-color);
  min-height: 100vh;
  position: relative;

  .faAngleRight {
    color: var(--light-text-color);
  }
`;

export const baseLayout = (
  <BaseLayoutContainer>
    {/* <PageTransition /> */}
    <LayoutHeader />
    <Outlet />
  </BaseLayoutContainer>
);
