import path from 'path';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { LayoutHeader } from '../../widget/LayoutHeader';

const BaseLayoutContainer = styled.div`
  /* color: var(--light-text-color); */
  /* .container {
    border: 0.2rem solid black;
    width: 60rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
  }

  .top {
    padding: 0.5rem;
    border: 0.2rem solid red;
  }

  .out {
    flex: 1;
    padding: 0.5rem;
    border: 0.2rem solid blue;
    display: flex;
  }

  .in {
    // ?
    flex: 1;
    border: 0.2rem solid black;
  } */
  background-color: #f3f4f6;
  height: 100%;
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
