import path from 'path';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { LayoutHeader } from '../../widget/LayoutHeader';

const BaseLayoutContainer = styled.div`
  border: 2px solid black;
  background-color: #f3f4f6;
  min-height: 100vh;
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
