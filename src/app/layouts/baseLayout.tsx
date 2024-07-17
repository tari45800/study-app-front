import React from 'react';
import { Outlet } from 'react-router-dom';
Outlet;

export const baseLayout = (
  <>
    <div>나는 배이스 레이아웃이야</div>
    <Outlet />
  </>
);
