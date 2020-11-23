import Box from '@material-ui/core/Box';
import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './common/Main';
import SearchContext from './common/Search/SearchContext';
import SearchList from './common/Search/SearchList';
import componentMap from './componentMap';
import getStarted from './pages/getStarted';
import home from './pages/home';

export interface ComponentType {
  children: any;
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

const Recursor: React.FC<ComponentType> = ({ children, component, ...rest }) => {
  console.log('component', component);
  const Comp = componentMap[component];
  return (
    <Comp {...rest}>
      {children && Array.isArray(children)
        ? children.map((c: ComponentType, i: number) => <Recursor key={i} {...c} />)
        : children}
    </Comp>
  );
};

function Router() {
  const { isOpen, q } = useContext(SearchContext);
  if (isOpen && q) {
    return <SearchList />;
  }
  return (
    <Box display="flex" flexDirection="column" flexGrow={1}>
      <Switch>
        {Object.keys(routes).map((route) => {
          const components = routes[route];
          return (
            <Route exact key={route} path={route}>
              <Main>
                {components.map((c, i) => (
                  <Recursor key={i} {...c} />
                ))}
              </Main>
            </Route>
          );
        })}
      </Switch>
    </Box>
  );
}

export default Router;
