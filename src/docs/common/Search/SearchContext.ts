import React from 'react';

import { StateType } from './initialState';

export interface SearchContextType extends StateType {
  setSearchOpen: (isOpen: boolean) => void;
  setSearchQ: (q: string) => void;
  setSearchResults: () => void;
}

const SearchContext = React.createContext({} as SearchContextType);

export default SearchContext;
