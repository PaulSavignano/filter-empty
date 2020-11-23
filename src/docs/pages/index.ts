import React from 'react';

import home from './home';
import getStarted from './getStarted';

export interface ComponentType {
  children?: ComponentType[] | string;
  className?: string;
  component: string;
  src?: string;
  style?: React.CSSProperties;
}

export interface RoutesType {
  [key: string]: ComponentType[];
}

const routes: RoutesType = {
  '/': home,
  '/get-started': getStarted,
};

export default routes;
