import path from 'path';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { LayoutHeader } from '../../widget/LayoutHeader';
import { BackGround } from '../../shared/ui';
import { Timer } from '../../entity/Timer';

const BaseLayoutContainer = styled.div`
  background-color: var(--background-color);
  min-height: 100vh;
  position: relative;

  .faAngleRight {
    color: var(--light-text-color);
  }

  .absoluteFeatureBox {
    position: fixed;
    bottom: var(--spacing-small);
    left: var(--spacing-small);
  }

  @media (max-height: 45rem) {
    background-color: red;
  }
`;

export const baseLayout = (
  <BaseLayoutContainer>
    {/* <PageTransition /> */}
    <LayoutHeader />
    <Outlet />
    <div className="absoluteFeatureBox">
      <BackGround>
        <Timer />
      </BackGround>
    </div>
  </BaseLayoutContainer>
);
