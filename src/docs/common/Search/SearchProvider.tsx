import React, { useCallback, useMemo, useReducer } from 'react';

import SearchContext from './SearchContext';
import reducer from './reducer';
import initialState from './initialState';
import { RoutesType, ComponentType } from '../../routes';
import getSlug from '../getSlug';

export interface ResultType extends ComponentType {
  route: string;
}

const SearchProvider: React.FC<{ routes: RoutesType }> = ({ children, routes }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSearchQ = useCallback((q) => {
    dispatch({ q, type: 'set_search_q' });
  }, []);

  const setSearchOpen = useCallback((isOpen) => {
    dispatch({ isOpen, type: 'set_search_open' });
  }, []);

  const setSearchResults = useCallback(() => {
    const results = Object.keys(routes).reduce((a, route) => {
      let index = 0;
      const { sections } = routes[route];
      sections &&
        sections.length &&
        sections.forEach((section) => {
          const { components } = section;
          components &&
            components.length &&
            components.forEach((component) => {
              const { children } = component;
              if (typeof children === 'string') {
                if (children.toLowerCase().indexOf(state.q.toLowerCase()) > -1) {
                  const slug = getSlug(children);
                  a[index] = {
                    ...component,
                    route: `/${route}#${slug}`,
                  };
                  index += 1;
                }
              }
            });
        });
      return a;
    }, [] as ResultType[]);

    dispatch({ results, type: 'set_search_results' });
  }, [routes, state.q]);

  return useMemo(
    () => (
      <SearchContext.Provider value={{ ...state, setSearchOpen, setSearchQ, setSearchResults }}>
        {children}
      </SearchContext.Provider>
    ),
    [children, setSearchOpen, setSearchQ, setSearchResults, state]
  );
};

export default SearchProvider;
