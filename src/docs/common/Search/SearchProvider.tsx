import React, { useCallback, useMemo, useReducer } from 'react';

import { RoutesType } from '../../pages';
import initialState from './initialState';
import reducer from './reducer';
import search from './search';
import SearchContext from './SearchContext';

const SearchProvider: React.FC<{ routes: RoutesType }> = ({ children, routes }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setSearchQ = useCallback((q) => {
    dispatch({ q, type: 'set_search_q' });
  }, []);

  const setSearchClose = useCallback(() => {
    dispatch({ type: 'set_search_close' });
  }, []);

  const setSearchOpen = useCallback((isOpen) => {
    dispatch({ isOpen, type: 'set_search_open' });
  }, []);

  const setSearchResults2 = useCallback(() => {
    const results = search({ q: state.q, routes });
    dispatch({ results, type: 'set_search_results' });
  }, [routes, state.q]);

  const value = useMemo(
    () => ({
      ...state,
      setSearchClose,
      setSearchOpen,
      setSearchQ,
      setSearchResults2,
    }),
    [setSearchClose, setSearchOpen, setSearchQ, setSearchResults2, state]
  );
  console.log('value is ', value);
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export default SearchProvider;
