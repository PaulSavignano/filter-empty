import React from 'react';

import { StateType } from './initialState';

export interface SearchContextType extends StateType {
  setSearchClose: () => void;
  setSearchOpen: (isOpen: boolean) => void;
  setSearchQ: (q: string) => void;
  setSearchResults2: () => void;
}

const SearchContext = React.createContext({} as SearchContextType);

export default SearchContext;
