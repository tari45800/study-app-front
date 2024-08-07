import path from 'path';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { LayoutHeader } from '../../widget/LayoutHeader';

const BaseLayoutContainer = styled.div`
  border: 2px solid black;
  background-color: var(--background-color);
  min-height: 100vh;

  .faAngleRight {
    color: var(--light-text-color);
  }
`;

export const baseLayout = (
  <BaseLayoutContainer>
    <LayoutHeader />
    {/* <div className="container">
      <div className="top">탑</div>
      <div className="out">
        <div className="in">안1</div>
        <div className="in">안2</div>
      </div>
    </div> */}

    <Outlet />
  </BaseLayoutContainer>
);
