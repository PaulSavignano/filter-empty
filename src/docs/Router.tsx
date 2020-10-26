import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import Section from './common/Section';
import Main from './common/Main';
import routes from './routes';
import SearchContext from './common/Search/SearchContext';
import SearchList from './common/Search/SearchList';

import componentMap from './componentMap';

function Router() {
  const { isOpen, q } = useContext(SearchContext);
  if (isOpen && q) {
    return <SearchList />;
  }
  return (
    <Box display="flex" flexDirection="column" flexGrow={1}>
      <Switch>
        {Object.keys(routes).map((route) => {
          const { sections } = routes[route];
          return (
            <Route exact key={route} path={route}>
              <Main>
                {sections.map((section, i) => {
                  const { components, ...rest } = section;
                  return (
                    <Section key={i} {...rest}>
                      {components.map(({ component, ...rest }, i) => {
                        const Component = componentMap[component];
                        return <Component key={i} {...rest} />;
                      })}
                    </Section>
                  );
                })}
              </Main>
            </Route>
          );
        })}
      </Switch>
    </Box>
  );
}

export default Router;
